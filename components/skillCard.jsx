import Image from "next/image";
import styles from "../styles/skillCard.module.css";

export default function SkillCard({imageSource, title, skills}) {
	const skillsElement = skills.map((skill) => <li key={skill}>{skill}</li>);

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
