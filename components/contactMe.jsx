import styles from "../styles/contactMe.module.css";
import HyperLink from "../components/hyperLink";
import PropTypes from "prop-types";

function ContactMe({title, description, links}) {
	const linkElement = links.map(({text, icon, href}, index) => {
		return <HyperLink key={index} text={text} icon={icon} href={href} />;
	});

	return (
		<div className={styles.footer}>
			<form className={styles.form}>
				<h2>Send a message</h2>
				<input className={styles.input} placeholder="Your email (so i can respond)."></input>
				<textArea className={styles.textArea} rows="7" placeholder="Your message goes here."></textArea>
				<button className={styles.button}>Submit</button>
			</form>
			<div className={styles.links}>
				<h2>Social links</h2>
				{linkElement}
			</div>
		</div>
	);
}

ContactMe.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	links: PropTypes.arrayOf(
		PropTypes.shape({
			text: PropTypes.string,
			icon: PropTypes.object,
			href: PropTypes.string,
		})
	).isRequired,
};

export default ContactMe;
