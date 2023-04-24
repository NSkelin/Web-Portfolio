import styles from "../styles/landing.module.css";
import PropTypes from "prop-types";
import Image from "next/image";

function Landing({imageSrc, title, subtitle}) {
	return (
		<div className={styles.landing}>
			<div className={styles.main}>
				<div className={styles.dialogue}>
					<h1>{title}</h1>
					<div className={styles.subtitle}>
						<h2>{subtitle}</h2>
					</div>
				</div>
				<Image width={300} height={300} src={imageSrc} alt="Picture of the author" className={styles.pfp} />
			</div>

			<button className={styles.button}>
				Take a look! <span class="material-symbols-outlined">arrow_downward</span>
			</button>
		</div>
	);
}

Landing.propTypes = {
	imageSrc: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	title: PropTypes.string,
	subtitle: PropTypes.string,
};

export default Landing;
