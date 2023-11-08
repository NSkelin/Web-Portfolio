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

export async function POST(req) {
	const body = await req.json();
	if (req.body === null) {
		return new Response("Body cannot be null", {
			status: 400,
		});
	} else {
		let status = await SendMessage(body.email, body.message);
		return new Response("", {status: status});
	}
}
