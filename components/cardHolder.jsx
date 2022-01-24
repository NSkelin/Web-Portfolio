import styles from "../styles/cardHolder.module.css";
import SkillCard from "../components/skillCard.jsx";
import LinkCard from "../components/linkCard.jsx";
import PropTypes from "prop-types";

function cardHolder({title, cards, style}) {
	const cardElements = cards.map(({cardType, title, imageSource, array}, index) => {
		if (cardType === "skill") {
			return <SkillCard key={index} imageSource={imageSource} title={title} skills={array} />;
		} else if (cardType === "link") {
			return <LinkCard key={title} backgroundImage={imageSource} title={title} links={array} />;
		}
	});

	if (style.direction === "left") {
		return (
			<div className={styles.cardSection}>
				<div style={{backgroundColor: style.color}} className={styles.cardExtensionLeft}></div>
				<div style={{borderRadius: "0px 20px 20px 0px", backgroundColor: style.color}} className={styles.cardHolder}>
					<span className={styles.title}>{title}</span>
					<div className={styles.cards}>{cardElements}</div>
				</div>
				<div className={styles.cardExtension}></div>
			</div>
		);
	} else if (style.direction === "right") {
		return (
			<div className={styles.cardSection}>
				<div className={styles.cardExtension}></div>
				<div style={{borderRadius: "20px 0px 0px 20px", backgroundColor: style.color}} className={styles.cardHolder}>
					<span className={styles.title}>{title}</span>
					<div className={styles.cards}>{cardElements}</div>
				</div>
				<div style={{backgroundColor: style.color}} className={styles.cardExtensionRight}></div>
			</div>
		);
	}
}

cardHolder.propTypes = {
	title: PropTypes.string,
	cards: PropTypes.arrayOf(
		PropTypes.shape({
			cardType: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			imageSource: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
			array: PropTypes.array.isRequired,
		}).isRequired
	).isRequired,
	style: PropTypes.shape({direction: PropTypes.string.isRequired, color: PropTypes.string.isRequired}).isRequired,
};

export default cardHolder;
