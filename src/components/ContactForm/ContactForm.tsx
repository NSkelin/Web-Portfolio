import React, {useState} from "react";
import Button from "../Button";
import styles from "./ContactForm.module.css";

/**
 * Renders a simple contact form that relays their message to a set email.
 * The form accepts a users email address (for replying to) and their message.
 */
function ContactForm() {
	const [email, setEmail] = useState("");
	const [userMessage, setUserMessage] = useState("");
	const [emailIncorrect, setEmailIncorrect] = useState(false);
	const [emailError, setEmailError] = useState("");
	const [messageIncorrect, setMessageIncorrect] = useState(false);
	const [messageError, setMessageError] = useState("");
	const [summaryMessage, setSummaryMessage] = useState("");
	const [summaryError, setSummaryError] = useState(false);

	/**
	 * Sends the form to the server for further processing.
	 * Then updates the forms UI to notify the user of a success or error.
	 *
	 * @param e The event sent when the form is being submitted
	 */
	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault(); // Stop form from auto submitting.

		// Ensure form inputs are correct.
		if (verifyInput() === false) return;

		// Construct the data obj to send to the server
		const body = {
			email: email,
			message: userMessage,
		};

		// Call server
		const res = await fetch("/api/contact", {
			method: "POST",
			body: JSON.stringify(body),
		});

		// Update UI depending on success / error.
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

	/**
	 * Verifies that the users input matches any constraints and updates the corresponding input with an error message if applicable.
	 * Checks all inputs before returning a result.
	 *
	 * @returns True / false if the input is correct / incorrect.
	 */
	function verifyInput() {
		let noError = true;

		// Check email input.
		if (email.length === 0) {
			setEmailIncorrect(true);
			setEmailError("Email cannot be blank.");
			noError = false;
		} else {
			setEmailIncorrect(false);
			setEmailError("");
		}

		// Check message input.
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
			<h2 className={styles.title}>Send a message</h2>
			<div className={styles.contentWrapper}>
				<div className={styles.inputWrapper}>
					<input
						className={emailIncorrect === true ? styles.inputError : styles.input}
						placeholder="Your email address"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					></input>
					<strong className={styles.errorMessage}>{emailError}</strong>
				</div>
				<div className={styles.inputWrapper}>
					<textarea
						className={messageIncorrect === true ? styles.textAreaError : styles.textArea}
						rows={7}
						placeholder="Your message goes here"
						value={userMessage}
						onChange={(e) => setUserMessage(e.target.value)}
					></textarea>
					<strong className={styles.errorMessage}>{messageError}</strong>
				</div>
				<div className={styles.submission}>
					<Button buttonStyle="filled" type="submit">
						Submit
					</Button>
					<strong className={summaryError === true ? styles.errorMessage : styles.successMessage}>
						{summaryMessage}
					</strong>
				</div>
			</div>
		</form>
	);
}

export default ContactForm;
