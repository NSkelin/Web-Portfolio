import nodemailer from "nodemailer";

/**
 * Attempts to send an email TO and FROM the email address saved inside the env file. This means the email address will recieve emails from itself.
 *
 * The content of the email will be composed of the email address and message sent in.
 *
 * @param email The email address of the sender, so you can reply to them.
 * @param message The message being sent.
 * @returns 200 | 500 depending on if the message was sent correctly. 200 is success, 500 is failed.
 */
async function SendMessage(email: string, message: string) {
	// Connect to the gmail server.
	let transporter = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 465,
		secure: true,
		auth: {
			user: process.env.GMAIL_EMAIL,
			pass: process.env.GMAIL_PASSWORD,
		},
	});

	// Construct the email.
	let emailBody = "From: " + email + "\n" + "Message: " + message;
	let mail = {
		from: process.env.GMAIL_EMAIL,
		subject: "Message sent from my portfolio.",
		to: process.env.GMAIL_EMAIL,
		text: emailBody,
	};

	// Try to send the email.
	try {
		let mailInfo = await transporter.sendMail(mail);
		console.log(mailInfo);
		return 200;
	} catch (err) {
		console.log(err);
		return 500;
	}
}

/**
 * Handles POST requests.
 */
export async function POST(req: Request) {
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
