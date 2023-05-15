import React from "react";
import PropTypes from "prop-types";
import styles from "./Contact.module.css";
import HyperLink from "../HyperLink/";
import ContactForm from "../ContactForm/";

function Contact({links}) {
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

Contact.defaultProps = {};

Contact.propTypes = {
	links: PropTypes.arrayOf(
		PropTypes.shape({
			Icon: PropTypes.func,
			text: PropTypes.string,
			href: PropTypes.string,
		})
	).isRequired,
};

export default Contact;
