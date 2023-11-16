import Image, {ImageProps} from "next/image";
import React, {useState} from "react";
import Button from "../Button/Button";
import CollapsibleArea from "../CollapsibleArea/CollapsibleArea";
import styles from "./About.module.scss";

export type Interest = string | Array<Interest>;
export type Skill = {Icon: any; text: string};
export type AboutProps = {
	/**
	 * A description of the author - i.e "About me".
	 *
	 * Each string is treated as its own paragraph, meaning each string will be within its own \<p> tag.
	 */
	description: string[];
	/**
	 * The interests to display under the interests section. The interests will be displayed as an unordered list with each interest being its own list item.
	 * If the interest is an array of more interests, those interests will be added to a new unordered list that will display under the last interest with
	 * 1 more level of indentation.
	 */
	interests: Interest[];
	/**
	 * Used to populates the skills section with the skills title and their icon.
	 *
	 * The outer array is the row that the skill will be placed in with the inner array being the skills inside that row.
	 */
	skillIconSources: Skill[][];
	/**
	 * Properties required for the image.
	 */
	imageProps: {
		src: ImageProps["src"];
		alt: ImageProps["alt"];
	};
	/**
	 * The reference to the element that will be used to center the browsers view around when the "Contact" button is clicked by the user.
	 *
	 * This is the result of using React's "useRef" hook. Do NOT pass in the "current" object, instead pass in the full ref.
	 */
	centerToRef?: React.MutableRefObject<null | HTMLElement>;
};
/**
 * Creates a \<ul> of interests, with each interest being a \<li> within that list.
 *
 * If the interest is an array of more interests a new \<ul> will be created, with further interests placed inside the new list.
 * This new \<ul> will be nested within the previous \<ul> and 1 more level of indentation.
 *
 * @returns An unorder list element with each interest as a list item.
 */
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
/**
 * Creates the unordered lists of skills.
 *
 * @param skillRowsData the 2 dimensional array where the first array is the row, and the second array is the skills in that row.
 * @returns an array of \<ul> elements containing the skills.
 */
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
/**
 * Places the skills into a styled \<li> for display.
 *
 * @returns a group of \<li> under a \<> tag. Make sure to add these to a list.
 */
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
/**
 * Renders an about section for describing the author.
 *
 * Includes an section for an image of the author and their self description, as well as a skills section for showing off their skills,
 * and an interests section for a little more personalization.
 */
function About({description, interests, skillIconSources, imageProps: {src, alt}, centerToRef}: AboutProps) {
	const [collapsed, setCollapsed] = useState(true);

	const interestList = createInterestList(interests);
	const skillIcons = createSkillRows(skillIconSources);
	const descriptionText = description.map((paragraph, index) => <p key={index}>{paragraph}</p>);

	/**
	 * Scrolls the browsers view to center around the referenced element passed in.
	 */
	function scrollTo() {
		if (centerToRef?.current == null) return;
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
				<CollapsibleArea collapsed={collapsed}>{descriptionText}</CollapsibleArea>
				<div className={styles.buttonWrapper}>
					<Button buttonStyle="outlined" onClick={() => setCollapsed(!collapsed)}>
						{collapsed ? "Show more" : "Show less"}
					</Button>
					<Button buttonStyle="filled" onClick={scrollTo}>
						Contact
					</Button>
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
