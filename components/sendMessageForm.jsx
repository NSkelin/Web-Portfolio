import styles from "../styles/sendMessageForm.module.css";
import {useState} from "react";

function SendMessageForm() {
	const [email, setEmail] = useState("");
	const [userMessage, setUserMessage] = useState("");

	let emailIncorrect = true;
	let emailError = "invalid email";
	let messageIncorrect = true;
	let messageError = "Message must be more than 50 characters";
	let summaryMessage = "Message sent!";
	let summaryError = false;

	return (
		<form className={styles.form}>
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
