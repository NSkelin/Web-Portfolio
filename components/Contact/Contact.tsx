import React from "react";
import ContactForm from "../ContactForm/";
import HyperLink from "../HyperLink/";
import {HyperLinkProps} from "../HyperLink/HyperLink";
import styles from "./Contact.module.css";

interface ContactProps {
	links: HyperLinkProps[];
}
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
