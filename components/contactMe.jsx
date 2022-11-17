import styles from "../styles/contactMe.module.css";
import HyperLink from "../components/hyperLink";
import PropTypes from "prop-types";
import ContactForm from "./contactForm.jsx";

function ContactMe({links}) {
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

ContactMe.propTypes = {
	links: PropTypes.arrayOf(
		PropTypes.shape({
			text: PropTypes.string,
			icon: PropTypes.object,
			href: PropTypes.string,
		})
	).isRequired,
};

export default ContactMe;
