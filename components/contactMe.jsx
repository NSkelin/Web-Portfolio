import styles from "../styles/contactMe.module.css";
import LineTitle from "../components/lineTitle";
import HyperLinkWithIcon from "../components/hyperLinkWithIcon";

export default function ContactMe({title, description, links}) {
	const linkElement = links.map((link) => {
		return (
			<HyperLinkWithIcon
				key={link.text}
				linkText={link.text}
				imageSource={link.imageSource}
				imageHeight={link.imageHeight}
				imageWidth={link.imageWidth}
				alt={link.alt}
				href={link.href}
			/>
		);
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
