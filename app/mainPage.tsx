"use client";
import React, {useRef} from "react";
import {aboutData, landingData, projectCards, socialLinks} from "../componentData";
import styles from "../pageStyles/index.module.css";

import About from "../components/About";
import AccentTitle from "../components/AccentTitle";
import Contact from "../components/Contact";
import Landing from "../components/Landing";
import Projects from "../components/Projects";

export default function MainPage() {
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
