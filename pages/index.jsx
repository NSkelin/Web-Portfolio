import Head from "next/head";
import styles from "../styles/index.module.css";
import {contactLinks} from "../data";
import pfp from "../public/profile_picture.png";

import Landing from "../components/Landing/";
import Projects from "../components/Projects/";
import About from "../components/About/";
import Contact from "../components/Contact/";

export default function Index() {
	return (
		<div className={styles.page}>
			<Head>
				<title>Nicks Portfolio</title>
				<meta name="description" content="My portfolio made and designed by me - Nick Skelin" />
				<link rel="icon" href="/favicon.ico?v=2" />
			</Head>

			<Landing imageSrc={pfp} title={"Hey, im Nick!"} subtitle={"I develop websites"}></Landing>

			<main className={styles.main}>
				<Projects />
				<About />
			</main>

			<footer className={styles.footer}>
				<Contact links={contactLinks} />
				<p className={styles.licensing}>
					Icons by{" "}
					<a href="https://icons8.com/">
						<b>
							<u>Icons8.com</u>
						</b>
					</a>
					.
				</p>
			</footer>
		</div>
	);
}
