"use client";
import React, {useRef} from "react";
import {aboutData, landingData, projectCardData, socialLinks} from "../componentData";
import styles from "../pageStyles/index.module.scss";

import ContactForm from "@/components/ContactForm";
import SocialLinks from "@/components/SocialLinks";
import About from "../components/About";
import Landing from "../components/Landing";
import ProjectSection from "../components/ProjectSection";

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
				<ProjectSection ref={projectsRef} projectData={projectCardData} />
				<About {...aboutData} centerToRef={footerRef} />
			</main>

			<footer ref={footerRef} className={styles.footer}>
				<div className={styles.footerWrapper}>
					<ContactForm />
					<SocialLinks links={socialLinks} />
				</div>
			</footer>
		</div>
	);
}
