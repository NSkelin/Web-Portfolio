import Image, {ImageProps} from "next/image";
import React, {useState} from "react";
import styles from "./About.module.scss";
import Button from "../Button/Button";
import CollapsibleArea from "../CollapsibleArea/CollapsibleArea";

export type Interest = string | Array<Interest>;
export type Skill = {Icon: any; text: string};
export type AboutProps = {
	/**
	 * A description of the author; "About me". Converts each string into its own paragraph. Ex: \<p>string\</p>.
	 */
	description: string[];
	/**
	 * A recursive array of strings or array of strings. Each nested array of strings will be indented relative to its nest level.
	 */
	interests: Interest[];
	/**
	 * Populates the skills section with an icon and text. Takes an array of an array of skills where the first array is the row,
	 * and the second array is the skills that go in that row.
	 */
	skillIconSources: Skill[][];
	/**
	 * An object that takes the "src" and "alt" props for a Nextjs Image component.
	 */
	image: ImageProps;
	/**
	 * A React "useRef" hook object with a DOM node reference. When the "contact" button is clicked, the browser will center itself on this node.
	 */
	centerToRef?: React.MutableRefObject<null | HTMLElement>;
};
/**
 * converts an array of interests into a JSX unorder list. Each nested interest array is added as a ul instead of li.
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
 * Converts the skill[][] into rows of skills.
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
 * Turns the skill array into JSX list items.
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
 * Fully fledged About section where you can write a description of yourself, show an image, your skills, and your interests.
 */
function About({description, interests, skillIconSources, image: {src, alt}, centerToRef}: AboutProps) {
	const [collapsed, setCollapsed] = useState(true);

	const interestList = createInterestList(interests);
	const skillIcons = createSkillRows(skillIconSources);
	const descriptionText = description.map((paragraph, index) => <p key={index}>{paragraph}</p>);

	/**
	 * Centers the browsers view around the "centerToRef" prop.
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
					<Button style="outlined" onClick={() => setCollapsed(!collapsed)}>
						{collapsed ? "Show more" : "Show less"}
					</Button>
					<Button style="filled" onClick={scrollTo}>
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
