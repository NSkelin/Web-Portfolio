import "@material/web/textfield/filled-text-field.js";
import React, {useRef, useState} from "react";
import Button from "../Button";
import styles from "./ContactForm.module.scss";

/**
 * Renders a simple contact form that relays their message to a set email.
 * The form accepts a users email address (for replying to) and their message.
 */
function ContactForm() {
	const [summaryMessage, setSummaryMessage] = useState("");
	const [summaryError, setSummaryError] = useState(false);
	const emailRef = useRef<HTMLInputElement>(null);
	const messageRef = useRef<HTMLTextAreaElement>(null);

	/**
	 * Sends the form to the server for further processing.
	 * Then updates the forms UI to notify the user of a success or error.
	 *
	 * @param e The event sent when the form is being submitted
	 */
	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault(); // Stop form from auto submitting.
		// @ts-expect-error - reset() exists on webcomponent but not on type 'HTMLInputElement'.
		emailRef?.current?.reset();
		// @ts-expect-error - reset() exists on webcomponent but not on type 'HTMLTextAreaElement'.
		messageRef?.current?.reset();

		const formData = new FormData(e.currentTarget);

		// Call server
		const res = await fetch("/api/contact", {
			method: "POST",
			body: formData,
		});

		// Update UI depending on success / error.
		if (res.status === 500) {
			setSummaryMessage("Failed to send, please try again later.");
			setSummaryError(true);
		} else if (res.status === 200) {
			setSummaryMessage("Success! Message sent. I will reply soon.");
			setSummaryError(false);
		}
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<h2 className={styles.title}>Send a message</h2>
			<div className={styles.contentWrapper}>
				{/* @ts-expect-error - Component doesnt exist on type 'JSX.IntrinsicElements'. */}
				<md-filled-text-field
					ref={emailRef}
					class={styles.input}
					type="email"
					placeholder="youremail@gmail.com"
					label="Email"
					required
					name="email"
					supporting-text="I will reply to this email address."
				>
					{/* @ts-expect-error - Component doesnt exist on type 'JSX.IntrinsicElements'. */}
				</md-filled-text-field>
				{/* @ts-expect-error - Component doesnt exist on type 'JSX.IntrinsicElements'. */}
				<md-filled-text-field
					ref={messageRef}
					class={styles.textArea}
					type="textarea"
					label="Message"
					placeholder="Hello, I would like to..."
					rows={7}
					required
					name="message"
					supporting-text="What would you like to say?"
				>
					{/* @ts-expect-error - Component doesnt exist on type 'JSX.IntrinsicElements'. */}
				</md-filled-text-field>
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
