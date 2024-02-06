import "@material/web/textfield/filled-text-field.js";
import {Checkmark, Loading, Send, X} from "public/icons";
import React, {useRef, useState} from "react";
import Button from "../Button";
import styles from "./ContactForm.module.scss";

const formMessages = {
	sending: null,
	success: "Thanks for sending a message! I will get in touch soon.",
	error: "Sorry, your message failed to send. Please try again later.",
	waiting: null,
};

/**
 * Renders a simple contact form that relays their message to a set email.
 * The form accepts a users email address (for replying to) and their message.
 */
function ContactForm() {
	const [formResponse, setFormResponse] = useState<"sending" | "success" | "error" | "waiting">("waiting");
	const emailRef = useRef<HTMLInputElement>(null);
	const messageRef = useRef<HTMLTextAreaElement>(null);

	const formMessage = formMessages[formResponse];
	const formResponseStyle = formResponse === "error" ? styles.errorMessage : styles.successMessage;

	// Icon styles to animate the form submit button.
	const sendIconStyle = formResponse === "waiting" ? styles.iconExpanded : styles.iconCollapsed;
	const loadingIconStyle = formResponse === "sending" ? styles.loadingIcon : styles.iconCollapsed;
	const checkmarkIconStyle = formResponse === "success" ? styles.iconExpanded : styles.iconCollapsed;
	const xIconStyle = formResponse === "error" ? styles.iconExpanded : styles.iconCollapsed;

	/**
	 * Sends the form to the server for further processing.
	 * Then updates the forms UI to notify the user of a success or error.
	 *
	 * @param e The event sent when the form is being submitted
	 */
	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault(); // Stop form from auto submitting.

		// Update button icon to loading.
		setFormResponse("sending");

		// Send the form data to the server.
		const formData = new FormData(e.currentTarget);
		const res = await fetch("/api/contact", {
			method: "POST",
			body: formData,
		});

		// Update UI depending on the response from the server.
		if (res.status === 200) {
			setFormResponse("success");

			// Clear the form inputs after a successful submission.
			// @ts-expect-error - reset() exists on webcomponent but not on type 'HTMLInputElement'.
			emailRef?.current?.reset();
			// @ts-expect-error - reset() exists on webcomponent but not on type 'HTMLTextAreaElement'.
			messageRef?.current?.reset();

			// Have the form response clear after a few seconds incase the user wants to send another message.
			setTimeout(() => {
				setFormResponse("waiting");
			}, 10000);
		} else {
			setFormResponse("error");
		}
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<h2 className={styles.title}>Send a message</h2>
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
			<div className={styles.submissionArea}>
				<strong className={formResponseStyle}>{formMessage}</strong>
				<Button buttonStyle="filled" type="submit">
					<div className={styles.iconWrapper}>
						<Send className={sendIconStyle} />
						<Loading className={loadingIconStyle} />
						<Checkmark className={checkmarkIconStyle} />
						<X className={xIconStyle} />
					</div>
					Send
				</Button>
			</div>
		</form>
	);
}

export default ContactForm;
