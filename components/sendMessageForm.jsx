import styles from "../styles/sendMessageForm.module.css";
import {useState} from "react";

function SendMessageForm() {
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
		verifyInput();
	}

	function verifyInput() {
		// check email input
		if (email.length === 0) {
			setEmailIncorrect(true);
			setEmailError("Email cannot be blank.");
		} else {
			setEmailIncorrect(false);
			setEmailError("");
		}

		// check message input
		if (!userMessage.length >= 50) {
			setMessageIncorrect(true)
			setMessageError("Message must be more than 50 characters.");
		} else {
			setMessageIncorrect(false);
			setMessageError("");
		}
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

export default SendMessageForm;
