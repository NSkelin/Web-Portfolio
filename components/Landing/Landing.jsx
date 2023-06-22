import React from "react";
import PropTypes from "prop-types";
import styles from "./Landing.module.scss";
import Image from "next/image";
import Button from "../Button/Button";

function Landing({imageSrc, title, subtitle, centerToRef}) {
	function scrollTo() {
		if (centerToRef.current === null) return;
		centerToRef.current.scrollIntoView({behavior: "smooth", block: "center"});
	}
	return (
		<header className={styles.landing}>
			<video className={styles.video} autoPlay loop muted>
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

Landing.defaultProps = {
	centerToRef: null,
};

Landing.propTypes = {
	imageSrc: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	title: PropTypes.string,
	subtitle: PropTypes.string,
	centerToRef: PropTypes.object,
};

export default Landing;
