import nodeCache from "node-cache";
import jwt from "jsonwebtoken";
import {setCookie} from "cookies-next";
import {v4 as uuidv4} from "uuid";

const TTL = 60 * 30; // time in seconds before cache, cookie, and jwt expire.
const cache = new nodeCache({stdTTL: TTL + 10, maxKeys: 100});

//Handles requests for saving and retrieving form input data-
// incase of browser close, refresh, etc. Will only save data temporarily to cache.
export default async function handler(req, res) {
	//form data comes in.
	if (req.method === "POST") {
		const body = JSON.parse(req.body);
		const formData = {email: body.email, message: body.message};
		const cookie = req.header.cookie;

		//user doesnt have identification.
		if (cookie === null) {
			//create new identification.
			let uuid = uuidv4();
			let token = jwt.sign(uuid, process.env.JWT_SECRET, {expiresIn: TTL});
			setCookie("token", token, {req, res, httpOnly: true, maxAge: TTL, sameSite: true, secure: true});

			//place form data into cache
			cache.set(uuid, formData, TTL);

			//return success
			res.status(200).send("success");
			return;
		}

		//user has identification
		//verify identity
		const token = cookie.token;
		jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
			//identity fails to verify
			if (err) {
				// JWT expired or JWT invalid
				if (err.name === "TokenExpiredError" || err.name === "JsonWebTokenError") {
					//return 400 error
					res.status(400).send(err.name);
				}
			}

			//identity verified
			//previous data exists
			if (cache.has(payload)) {
				//overwrite existing form data
				cache.del(payload);
				cache.set(payload, formData, TTL);
			}
			//no existing data
			else {
				//add to cache
				cache.set(payload, formData, TTL);
			}
		});
	}
	//request form data
	else if (req.method === "GET") {
		//user has identification
		if (req.header.cookie) {
			const cookie = req.header.cookie;
			const token = cookie.token;
			//verify identity
			jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
				//identity fails to verify
				if (err) {
					// JWT expired or JWT invalid
					if (err.name === "TokenExpiredError" || err.name === "JsonWebTokenError") {
						//return 400 error
						res.status(400).send(err.name);
					}
				}

				//identity verified
				//previous data exists
				if (cache.has(payload)) {
					let formData = cache.get(payload);
					res.status(200).json(formData);
				}
				//no existing data
				else {
					res.status(404).send();
				}
			});
		}
		//user has no identification
		res.status(403).send();
	} else {
		res.setHeader("Allow", "POST, GET");
		res.status(405).send();
	}
}
