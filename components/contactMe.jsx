import styles from "../styles/contactMe.module.css";
import LineTitle from "../components/lineTitle";
import HyperLink from "../components/hyperLink";
import PropTypes from "prop-types";

function ContactMe({title, description, links}) {
	const linkElement = links.map(({text, icon, href}, index) => {
		return <HyperLink key={index} text={text} icon={icon} href={href} />;
	});

	return (
		<div className={styles.contactMe}>
			<LineTitle title={title} />
			<div className={styles.description}>
				<p className={styles.text}>{description}</p>
				<div className={styles.links}>{linkElement}</div>
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
