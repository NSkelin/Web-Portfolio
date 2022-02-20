import styles from "../styles/sendMessageForm.module.css";
import {useState} from "react";

function SendMessageForm() {
	return (
		<form className={styles.form}>
			<h2>Send a message</h2>
			<input className={styles.input} placeholder="Your email (so i can respond)."></input>
			<textarea className={styles.textArea} rows="7" placeholder="Your message goes here."></textarea>
			<button className={styles.button}>Submit</button>
		</form>
	);
}

export default SendMessageForm;
