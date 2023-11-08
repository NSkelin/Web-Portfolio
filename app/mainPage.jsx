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
			<Landing
				imageSrc={landingData.image}
				title={landingData.title}
				subtitle={landingData.subtitle}
				centerToRef={projectsRef}
			></Landing>

			<main className={styles.main}>
				<Projects ref={projectsRef} cards={projectCards} />
				<About
					description={aboutData.description}
					interests={aboutData.interests}
					skillIconSources={aboutData.skillIconSources}
					image={aboutData.image}
					centerToRef={footerRef}
				/>
			</main>

			<footer ref={footerRef} className={styles.footer}>
				<AccentTitle title={"Get in Touch"} />
				<Contact links={socialLinks} />
			</footer>
		</div>
	);
}
