import styles from "../styles/contactForm.module.css";
import {useState} from "react";

function ContactForm() {
	const [email, setEmail] = useState("");
	const [userMessage, setUserMessage] = useState("");
	const [emailIncorrect, setEmailIncorrect] = useState(false);
	const [emailError, setEmailError] = useState("");
	const [messageIncorrect, setMessageIncorrect] = useState(false);
	const [messageError, setMessageError] = useState("");
	const [summaryMessage, setSummaryMessage] = useState("");
	const [summaryError, setSummaryError] = useState(false);

	async function handleSubmit(e) {
		e.preventDefault();
		if (verifyInput() === false) return;

		let body = {
			"email": email,
			"message": userMessage,
		};

		let res = await fetch("/api/contact", {
			method: "POST",
			body: JSON.stringify(body),
		});

		if (res.status === 500) {
			setSummaryMessage("Failed to send, please try again later.");
			setSummaryError(true);
		} else if (res.status === 200) {
			setEmail("");
			setUserMessage("");
			setSummaryMessage("Success! Message sent. I will reply soon.");
			setSummaryError(false);
		}
	}

	function verifyInput() {
		let noError = true;

		// check email input
		if (email.length === 0) {
			setEmailIncorrect(true);
			setEmailError("Email cannot be blank.");
			noError = false;
		} else {
			setEmailIncorrect(false);
			setEmailError("");
		}

		// check message input
		if (userMessage.length < 50) {
			setMessageIncorrect(true);
			setMessageError("Message must be more than 50 characters.");
			noError = false;
		} else {
			setMessageIncorrect(false);
			setMessageError("");
		}

		return noError;
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<h2>Send a message</h2>
			<input
				className={emailIncorrect === true ? styles.inputError : styles.input}
				placeholder="Your email (so i can respond)."
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			></input>
			<p className={styles.errorMessage}>{emailError}</p>
			<textarea
				className={messageIncorrect === true ? styles.textAreaError : styles.textArea}
				rows="7"
				placeholder="Your message goes here."
				value={userMessage}
				onChange={(e) => setUserMessage(e.target.value)}
			></textarea>
			<p className={styles.errorMessage}>{messageError}</p>
			<button className={styles.button}type="submit">Submit</button>
			<p className={summaryError === true ? styles.errorMessage : styles.successMessage}>{summaryMessage}</p>
		</form>
	);
}

export default ContactForm;
