import React from "react";
import ContactForm from "../ContactForm/";
import HyperLink from "../HyperLink/";
import {HyperLinkProps} from "../HyperLink/HyperLink";
import styles from "./Contact.module.css";

interface ContactProps {
	/** The links that will be placed under the social links area. */
	links: HyperLinkProps[];
}
/**
 * Renders a contact section with social links list and a message form that sends a users message to your email.
 */
function Contact({links}: ContactProps) {
	const linkElement = links.map(({Icon, text, href}, index) => {
		return <HyperLink key={index} text={text} Icon={Icon} href={href} />;
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
