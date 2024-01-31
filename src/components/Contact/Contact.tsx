import React, {ComponentProps} from "react";
import ContactForm from "../ContactForm";
import LinkButton, {LinkButtonProps} from "../LinkButton";
import styles from "./Contact.module.scss";

export interface ContactProps {
	/**
	 * The links that will be placed under the social links area.
	 */
	links: {
		/**
		 * The text that will be a clickable hyperlink.
		 */
		text?: string;
		/**
		 * The icon to place next to the hyperlink.
		 */
		Icon: React.ComponentType<ComponentProps<"svg">>;
		href: LinkButtonProps["href"];
	}[];
}
/**
 * Renders a contact section with social links list and a message form that sends a users message to your email.
 */
function Contact({links}: ContactProps) {
	const linkElement = links.map(({Icon, text, href}, index) => {
		return (
			<LinkButton key={index} href={href} style="text">
				<Icon className={styles.icon} /> {text}
			</LinkButton>
		);
	});

	return (
		<>
			<ContactForm />

			<section className={styles.socials}>
				<h2 className={styles.title}>Social</h2>
				<address className={styles.contentWrapper}>{linkElement}</address>
			</section>
		</>
	);
}

export default Contact;
