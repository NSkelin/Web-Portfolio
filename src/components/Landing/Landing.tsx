import Image, {ImageProps} from "next/image";
import {ArrowDownward} from "public/icons";
import React from "react";
import Button from "../Button";
import styles from "./Landing.module.scss";

export type LandingProps = {
	/**
	 * The source for the landing image. Should be an image of the author, or an avatar that represents them.
	 */
	imageSrc: ImageProps["src"];
	/**
	 * The first thing people will read when coming to the site. It should be very short and include something important such as a main hook, or "who" you are.
	 */
	title: string;
	/**
	 * The subtitle directly under the title. It should include some extra information such as "what" you do.
	 */
	subtitle: string;
	/**
	 * The reference to the element that will be used to center the browsers view around when the call to action button is clicked by the user.
	 *
	 * This is the result of using React's "useRef" hook. Do NOT pass in the "current" object, instead pass in the full ref.
	 */
	centerToRef?: React.MutableRefObject<null | HTMLElement>;
};
function Landing({imageSrc, title, subtitle, centerToRef}: LandingProps) {
	/**
	 * Scrolls the browsers view to center around the referenced element passed in.
	 */
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
					<Image
						fill={true}
						src={imageSrc}
						alt="Picture of the author"
						priority={true}
						sizes="
						(min-width: 905px) 300px,
						(min-width: 600px) and (max-width: 904px) 300px,
						250px"
					/>
				</div>
				<div className={styles.dialogue}>
					<h1>{title}</h1>
					<p className={styles.subtitle}>{subtitle}</p>
				</div>
			</div>

			<Button buttonStyle={"fab"} onClick={scrollTo}>
				Take a look!
				<ArrowDownward className={styles.materialSymbol} />
			</Button>
		</header>
	);
}

export default Landing;
