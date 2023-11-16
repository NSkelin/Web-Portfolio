"use client";
import React, {useRef} from "react";
import {aboutData, landingData, projectCards, socialLinks} from "../componentData";
import styles from "../pageStyles/index.module.css";

import About from "../components/About";
import AccentTitle from "../components/AccentTitle";
import Contact from "../components/Contact";
import Landing from "../components/Landing";
import Projects from "../components/Projects";

/**
 * Renders the main page of the portfolio. This includes a landing section, a projects section, an about section, and a contact section.
 */
export default function MainPage() {
	// Refs used to scroll that section into view when the user clicks a call to action button such as "view more" or "contact".
	const projectsRef = useRef(null);
	const footerRef = useRef(null);
	return (
		<div className={styles.page}>
			<Landing {...landingData} centerToRef={projectsRef}></Landing>

			<main className={styles.main}>
				<Projects ref={projectsRef} cards={projectCards} />
				<About {...aboutData} centerToRef={footerRef} />
			</main>

			<footer ref={footerRef} className={styles.footer}>
				<AccentTitle title={"Get in Touch"} />
				<Contact links={socialLinks} />
			</footer>
		</div>
	);
}
