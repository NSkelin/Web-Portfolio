import React from "react";
import PropTypes from "prop-types";
import styles from "./About.module.css";
import AccentTitle from "../AccentTitle/AccentTitle";
import Image from "next/image";

function createInterestList(interests, indentLevel = 0) {
	const interestList = interests.map((interest, index) => {
		if (Array.isArray(interest)) {
			return (
				<ul className={styles.list} key={indentLevel + 1}>
					{" "}
					{createInterestList(interest, indentLevel + 1)}{" "}
				</ul>
			);
		} else {
			return <li key={indentLevel + index}>{interest}</li>;
		}
	});

	return <>{interestList}</>;
}

function createSkillRows(skills) {
	const skillRows = skills.map((arr, index) => {
		return (
			<ul key={index} className={styles.skillRow}>
				{createSkillIcons(arr)}
			</ul>
		);
	});
	return <>{skillRows}</>;
}

function createSkillIcons(skills) {
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

function About({description, interests, skillIconSources, image: {src, width, height, alt}}) {
	const interestList = createInterestList(interests);
	const skillIcons = createSkillRows(skillIconSources);

	return (
		<section className={styles.about}>
			<div className={styles.topRow}>
				<div className={styles.aboutTitleMobile}>
					<AccentTitle title={"About me"} />
					<Image className={styles.pfp} src={src} width={width} height={height} alt={alt} />
					<p className={styles.description}>{description}</p>
				</div>
				<div className={styles.aboutTitleDesktop}>
					<Image className={styles.pfp} src={src} width={width} height={height} alt={alt} />
					<div className={styles.description}>
						<AccentTitle title={"About me"} />
						<p>{description}</p>
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

About.defaultProps = {
	description: "About yourself...",
	interests: ["interest 1", "interest 2", "interest 3", "..."],
	skillIconSources: [],
};

About.propTypes = {
	description: PropTypes.string,
	interests: PropTypes.array,
	skillIconSources: PropTypes.array,
};

export default About;
