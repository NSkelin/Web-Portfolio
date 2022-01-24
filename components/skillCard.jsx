import Image from "next/image";
import styles from "../styles/skillCard.module.css";
import PropTypes from "prop-types";

function SkillCard({imageSource, title, skills}) {
	const skillsElement = skills.map((skill, index) => <li key={index}>{skill}</li>);

	return (
		<div className={styles.skillCard}>
			<Image src={imageSource} alt="Icon to represent the skill" />
			<div className={styles.title}>
				<b>{title}</b>
			</div>
			<hr className={styles.hr} />
			<ul className={styles.skillCardUl}>{skillsElement}</ul>
		</div>
	);
}

SkillCard.propTypes = {
	imageSource: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
	title: PropTypes.string.isRequired,
	skills: PropTypes.array.isRequired,
};

export default SkillCard;
