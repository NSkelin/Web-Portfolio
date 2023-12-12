import React, {ComponentProps} from "react";
import ContactForm from "../ContactForm";
import HyperLink, {HyperLinkProps} from "../HyperLink";
import styles from "./Contact.module.css";

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
		href: HyperLinkProps["href"];
	}[];
}
/**
 * Renders a contact section with social links list and a message form that sends a users message to your email.
 */
function Contact({links}: ContactProps) {
	const linkElement = links.map(({Icon, text, href}, index) => {
		return (
			<HyperLink key={index} href={href} style="text">
				<Icon className={styles.icon} /> {text}
			</HyperLink>
		);
	});

	return (
		<section className={styles.footer}>
			<ContactForm />

			<section className={styles.socials}>
				<h2 className={styles.title}>Social links</h2>
				<address className={styles.contentWrapper}>{linkElement}</address>
			</section>
		</section>
	);
}

export default Contact;
