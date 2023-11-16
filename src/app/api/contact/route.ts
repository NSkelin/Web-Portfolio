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
	await transporter.sendMail(mail);
}

/**
 * Handles POST requests.
 */
export async function POST(req: Request) {
	// Ensure a body object was sent.
	if (req.body === null) {
		return new Response("Body cannot be null", {
			status: 400,
		});
	}

	// Get email and message from body.
	const {email, message} = await req.json();
	if (typeof email !== "string") {
		return new Response("Email must be a string.", {
			status: 400,
		});
	} else if (typeof message !== "string") {
		return new Response("Message must be a string.", {
			status: 400,
		});
	}

	// Send the email.
	try {
		await SendMessage(email, message);
		return new Response("", {status: 200});
	} catch {
		return new Response("", {status: 500});
	}
}
