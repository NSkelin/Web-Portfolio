import React from "react";
import PropTypes from "prop-types";
import styles from "./Contact.module.css";
import HyperLink from "../hyperLink";
import ContactForm from "../contactForm.jsx";

function Contact({links}) {
	const linkElement = links.map(({text, icon, href}, index) => {
		return <HyperLink key={index} text={text} icon={icon} href={href} />;
	});

	return (
		<div className={styles.footer}>
			<ContactForm />

			<div className={styles.links}>
				<h2>Social links</h2>
				{linkElement}
			</div>
		</div>
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
