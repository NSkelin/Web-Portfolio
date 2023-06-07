import Image, {ImageProps} from "next/image";
import React, {useState} from "react";
import styles from "./About.module.scss";

type Interest = string | Array<Interest>;
type Skill = {Icon: any; text: string};
export type AboutProps = {
	description: string[];
	interests: Interest[];
	skillIconSources: Skill[][];
	image: ImageProps;
	centerToRef?: React.MutableRefObject<null | HTMLElement>;
};

function createInterestList(interests: Interest[]) {
	const interestList = interests.map((interest, index) => {
		if (Array.isArray(interest)) {
			return <ul key={index}> {createInterestList(interest)} </ul>;
		} else {
			return <li key={index}>{interest}</li>;
		}
	});

	return <>{interestList}</>;
}

function createSkillRows(skillRowsData: Skill[][]) {
	const skillRowsArr = skillRowsData.map((arr, index) => {
		return (
			<ul key={index} className={styles.row}>
				{createSkillIcons(arr)}
			</ul>
		);
	});
	return <>{skillRowsArr}</>;
}

function createSkillIcons(skills: Skill[]) {
	const skillIcons = skills.map(({Icon, text}, index) => {
		return (
			<li key={index} className={styles.skillIconGroup}>
				<Icon className={styles.icon} />
				<p>{text}</p>
			</li>
		);
	});
	return <>{skillIcons}</>;
}

function About({description, interests, skillIconSources, image: {src, alt}, centerToRef}: AboutProps) {
	const [collapsed, setCollapsed] = useState(true);

	const interestList = createInterestList(interests);
	const skillIcons = createSkillRows(skillIconSources);
	const descriptionText = description.map((paragraph, index) => <p key={index}>{paragraph}</p>);

	function scrollTo() {
		if (centerToRef === undefined) return;
		if (centerToRef.current === null) return;
		centerToRef.current.scrollIntoView({behavior: "smooth", block: "center"});
	}

	return (
		<section className={styles.about}>
			<section className={styles.personal}>
				<div className={styles.imageWrapper}>
					<Image className={styles.pfp} src={src} alt={alt} sizes="(max-width: 600px) 172px, 232px" />
				</div>
				<h2>{"About"}</h2>
				<div className={styles.divider}></div>
				<div className={collapsed ? styles.collapsed : styles.expanded}>{descriptionText}</div>
				<div className={styles.buttonWrapper}>
					<button onClick={() => setCollapsed(!collapsed)}>{collapsed ? "Show more" : "Show less"}</button>
					<button onClick={scrollTo}>Contact</button>
				</div>
			</section>

			<aside className={styles.interests}>
				<div className={styles.divider}></div>
				<h3>{"Interests"}</h3>
				<ul>{interestList}</ul>
			</aside>

			<section className={styles.skills}>
				<h3 className={styles.title}>Skills</h3>
				{skillIcons}
			</section>
		</section>
	);
}

export default About;
