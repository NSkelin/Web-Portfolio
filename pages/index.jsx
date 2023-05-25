import React, {useRef} from "react";
import Head from "next/head";
import styles from "../pageStyles/index.module.css";
import {socialLinks, aboutData, projectCards, landingData} from "../componentData";

import Landing from "../components/Landing/";
import Projects from "../components/Projects/";
import About from "../components/About/";
import Contact from "../components/Contact/";
import AccentTitle from "../components/AccentTitle/";

export default function Index() {
	const myRef = useRef(null);
	return (
		<div className={styles.page}>
			<Head>
				<title>Nicks Portfolio</title>
				<meta name="description" content="My portfolio made and designed by me - Nick Skelin" />
				<link rel="icon" href="/favicon.ico?v=2" />
			</Head>

			<Landing
				imageSrc={landingData.image}
				title={landingData.title}
				subtitle={landingData.subtitle}
				centerToRef={myRef}
			></Landing>

			<main className={styles.main}>
				<Projects ref={myRef} cards={projectCards} />
				<About
					description={aboutData.description}
					interests={aboutData.interests}
					skillIconSources={aboutData.skills}
					image={aboutData.image}
				/>
			</main>

			<footer className={styles.footer}>
				<AccentTitle title={"Get in Touch"} />
				<Contact links={socialLinks} />
			</footer>
		</div>
	);
}
