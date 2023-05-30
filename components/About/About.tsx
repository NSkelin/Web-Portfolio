import React from "react";
import styles from "./About.module.scss";
import AccentTitle from "../AccentTitle/AccentTitle";
import Image from "next/image";
import {ImageProps} from "next/image";

type Interest = string | Array<Interest>;
type Skill = {Icon: any; text: string};
export type AboutProps = {description: string[]; interests: Interest[]; skillIconSources: Skill[][]; image: ImageProps};

function createInterestList(interests: Interest[]) {
	const interestList = interests.map((interest, index) => {
		if (Array.isArray(interest)) {
			return (
				<ul className={styles.list} key={index}>
					{" "}
					{createInterestList(interest)}{" "}
				</ul>
			);
		} else {
			return <li key={index}>{interest}</li>;
		}
	});

	return <>{interestList}</>;
}

function createSkillRows(skillRowsData: Skill[][]) {
	const skillRowsArr = skillRowsData.map((arr, index) => {
		return (
			<ul key={index} className={styles.skillRow}>
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
				<Icon className={styles.skillIcon} />
				<p>{text}</p>
			</li>
		);
	});
	return <>{skillIcons}</>;
}

function About({description, interests, skillIconSources, image: {src, alt}}: AboutProps) {
	const interestList = createInterestList(interests);
	const skillIcons = createSkillRows(skillIconSources);
	const text = description.map((paragraph, index) => (
		<p className={styles.p} key={index}>
			{paragraph}
		</p>
	));

	return (
		<section className={styles.about}>
			<div className={styles.topRow}>
				<div className={styles.aboutTitleMobile}>
					<AccentTitle title={"About me"} />
					<Image className={styles.pfp} src={src} alt={alt} />
					<div className={styles.description}>{text}</div>
				</div>
				<div className={styles.aboutTitleDesktop}>
					<Image className={styles.pfp} src={src} alt={alt} />
					<div className={styles.description}>
						<AccentTitle title={"About me"} />
						{text}
					</div>
				</div>
			</div>

			<div className={styles.bottomRow}>
				<section className={styles.skills}>
					<h3 className={styles.title}>Skills</h3>
					<div className={styles.skillRows}>{skillIcons}</div>
				</section>
				<aside className={styles.interests}>
					<h3 className={styles.title}>Interests</h3>
					<div className={styles.interestContent}>
						<ul className={styles.list}>{interestList}</ul>
					</div>
				</aside>
			</div>
		</section>
	);
}

export default About;
