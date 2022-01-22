import styles from "../styles/contactMe.module.css";
import LineTitle from "../components/lineTitle";
import HyperLink from "../components/hyperLink";

export default function ContactMe({title, description, links}) {
	const linkElement = links.map((link) => {
		const icon = {source: link.imageSource, width: link.imageWidth, height: link.imageHeight, alt: link.alt};
		return <HyperLink key={link.text} text={link.text} icon={icon} alt={link.alt} href={link.href} />;
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
