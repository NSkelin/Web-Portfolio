import Image, {ImageProps} from "next/image";
import React from "react";
import Button from "../Button/Button";
import styles from "./Landing.module.scss";

export type LandingProps = {
	/**
	 * The source for the profile picture.
	 */
	imageSrc: ImageProps["src"];
	/**
	 * The title / main hook.
	 */
	title: string;
	/**
	 * The subtitle to go with the title.
	 */
	subtitle: string;
	/**
	 * A React "useRef" hook object with a DOM node reference. When the button is clicked, the browser will center itself on this node.
	 */
	centerToRef?: React.MutableRefObject<null | HTMLElement>;
};
function Landing({imageSrc, title, subtitle, centerToRef}: LandingProps) {
	function scrollTo() {
		if (centerToRef?.current == null) return;
		centerToRef.current.scrollIntoView({behavior: "smooth", block: "center"});
	}
	return (
		<header className={styles.landing}>
			<video className={styles.video} poster="stars preview.jpg" autoPlay loop muted>
				<source src="stars.mp4" type="video/mp4"></source>
			</video>

			<div className={styles.main}>
				<div className={styles.pfp}>
					<Image fill={true} src={imageSrc} alt="Picture of the author" priority={true} />
				</div>
				<div className={styles.dialogue}>
					<h1>{title}</h1>
					<p className={styles.subtitle}>{subtitle}</p>
				</div>
			</div>

			<Button style={"fab"} onClick={scrollTo}>
				Take a look! <span className="material-symbols-outlined">arrow_downward</span>
			</Button>
		</header>
	);
}

export default Landing;
