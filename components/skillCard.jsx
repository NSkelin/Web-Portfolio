import {Icon} from "@iconify/react";
import styles from "../styles/skillCard.module.css";
import PropTypes from "prop-types";

function SkillCard({icon: {source, width = 24, height = 24, color = "darkgray"}, title, skills}) {
	const skillsElement = skills.map((skill, index) => <li key={index}>{skill}</li>);

	return (
		<div className={styles.skillCard}>
			<Icon icon={source} width={width} height={height} color={color} />
			<div className={styles.title}>
				<b>{title}</b>
			</div>
			<hr className={styles.hr} />
			<ul className={styles.skillCardUl}>{skillsElement}</ul>
		</div>
	);
}

SkillCard.propTypes = {
	icon: PropTypes.shape({
		source: PropTypes.string.isRequired,
		width: PropTypes.number,
		height: PropTypes.number,
		color: PropTypes.string,
	}),
	title: PropTypes.string.isRequired,
	skills: PropTypes.array.isRequired,
};

export default SkillCard;
