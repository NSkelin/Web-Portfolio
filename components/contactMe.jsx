import styles from "../styles/contactMe.module.css";
import LineTitle from "../components/lineTitle";
import HyperLink from "../components/hyperLink";

export default function ContactMe({title, description, links}) {
	const linkElement = links.map(({text, icon, href}) => {
		return <HyperLink key={text} text={text} icon={icon} href={href} />;
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
