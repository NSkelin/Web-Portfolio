import React from "react";
import PropTypes from "prop-types";
import styles from "./Contact.module.css";
import HyperLink from "../hyperLink/";
import ContactForm from "../ContactForm/";

function Contact({links}) {
	const linkElement = links.map(({text, icon, href}, index) => {
		return <HyperLink key={index} text={text} icon={icon} href={href} />;
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

Contact.defaultProps = {};

Contact.propTypes = {
	links: PropTypes.arrayOf(
		PropTypes.shape({
			text: PropTypes.string,
			icon: PropTypes.object,
			href: PropTypes.string,
		})
	).isRequired,
};

export default Contact;
