import React from "react";
import PropTypes from "prop-types";
import styles from "./Landing.module.css";
import Image from "next/image";

function Landing({imageSrc, title, subtitle}) {
	return (
		<header className={styles.landing}>
			<div className={styles.main}>
				<div className={styles.pfp}>
					<Image fill={true} src={imageSrc} alt="Picture of the author" />
				</div>
				<div className={styles.dialogue}>
					<h1>{title}</h1>
					<p className={styles.subtitle}>{subtitle}</p>
				</div>
			</div>

			<button className={styles.button}>
				Take a look! <span className="material-symbols-outlined">arrow_downward</span>
			</button>
		</header>
	);
}

Landing.defaultProps = {};

Landing.propTypes = {
	imageSrc: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	title: PropTypes.string,
	subtitle: PropTypes.string,
};

export default Landing;
