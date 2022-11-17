import nodemailer from "nodemailer";

async function SendMessage(email, message) {
	let transporter = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 465,
		secure: true,
		auth: {
			user: process.env.GMAIL_EMAIL,
			pass: process.env.GMAIL_PASSWORD,
		},
	});

	let emailBody = "From: " + email + "\n" + "Message: " + message;

	let mail = {
		from: process.env.GMAIL_EMAIL,
		subject: "Message sent from my portfolio.",
		to: process.env.GMAIL_EMAIL,
		text: emailBody,
	};

	try {
		let mailInfo = await transporter.sendMail(mail);
		console.log(mailInfo);
		return 200;
	} catch (err) {
		console.log(err);
		return 500;
	}
}

export default async function handler(req, res) {
	if (req.method === "POST") {
		if (req.body === null) {
			res.status(400).send("Body cannot be null");
		} else {
			let body = JSON.parse(req.body);
			let status = await SendMessage(body.email, body.message);
			res.status(status).send();
		}
	} else {
		res.setHeader("Allow", "POST");
		res.status(405).send();
	}
}
