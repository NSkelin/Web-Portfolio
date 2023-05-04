import React from "react";
import PropTypes from "prop-types";
import styles from "./About.module.css";
import AccentTitle from "../AccentTitle/AccentTitle";
import Image from "next/image";

function About({selfDescription, interests, src, alt, width, height}) {
	const interestList = interests.map((interest, index) => <li key={index}>{interest}</li>);
	return (
		<section className={styles.about}>
			<div className={styles.topRow}>
				<Image className={styles.pfp} src={src} width={width} height={height} alt={alt} />
				<div className={styles.description}>
					<AccentTitle title={"About me"} />
					<p>{selfDescription}</p>
				</div>
			</div>
			<div className={styles.bottomRow}>
				<section className={styles.skills}>
					<h3 className={styles.title}>Skills</h3>
					<div className={styles.skillRow}></div>
					<div className={styles.skillRow}></div>
				</section>
				<aside className={styles.interests}>
					<h3 className={styles.title}>Interests</h3>
					<ul className={styles.list}>{interestList}</ul>
				</aside>
			</div>
		</section>
	);
}

About.defaultProps = {
	selfDescription: "About yourself...",
	interests: ["interest 1", "interest 2", "interest 3", "..."],
};

About.propTypes = {
	selfDescription: PropTypes.string,
	interests: PropTypes.arrayOf(PropTypes.string),
};

export default About;
