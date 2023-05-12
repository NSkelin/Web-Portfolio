import React, {useRef} from "react";
import Head from "next/head";
import styles from "../pageStyles/index.module.css";
import {contactData, aboutData, projectsData} from "../componentData";
import pfp from "../public/profile_picture.png";

import Landing from "../components/Landing/";
import Projects from "../components/Projects/";
import About from "../components/About/";
import Contact from "../components/Contact/";

export default function Index() {
	const myRef = useRef(null);
	return (
		<div className={styles.page}>
			<Head>
				<title>Nicks Portfolio</title>
				<meta name="description" content="My portfolio made and designed by me - Nick Skelin" />
				<link rel="icon" href="/favicon.ico?v=2" />
			</Head>

			<Landing imageSrc={pfp} title={"Hey, im Nick!"} subtitle={"I develop websites"} centerToRef={myRef}></Landing>

			<main className={styles.main}>
				<Projects ref={myRef} cards={projectsData} />
				<About
					description={aboutData.description}
					interests={aboutData.interests}
					skillIconSources={aboutData.skills}
					image={aboutData.image}
				/>
			</main>

			<footer className={styles.footer}>
				<Contact links={contactData} />
				<p className={styles.licensing}></p>
			</footer>
		</div>
	);
}
