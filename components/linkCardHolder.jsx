import styles from "../styles/linkCardHolder.module.css";
import LinkCard from "../components/linkCard.jsx";

export default function cardHolder({title, cards}) {
	const cardElements = cards.map((card) => <LinkCard key={card.title} backgroundImage={card.imageSource} title={card.title} links={card.links} />);

	return (
		<div className={styles.cardSection}>
			<div className={styles.cardExtensionLeft}></div>
			<div className={styles.cardHolder}>
				<span className={styles.title}>{title}</span>
				<div className={styles.cards}>{cardElements}</div>
			</div>
			<div className={styles.cardExtensionRight}></div>
		</div>
	);
}
