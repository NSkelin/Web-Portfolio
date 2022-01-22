import styles from "../styles/cardHolder.module.css";
import SkillCard from "../components/skillCard.jsx";

export default function cardHolder({title, cards}) {
	const cardElements = cards.map((card) => <SkillCard key={card.title} imageSource={card.imageSource} title={card.title} skills={card.skills} />);

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
