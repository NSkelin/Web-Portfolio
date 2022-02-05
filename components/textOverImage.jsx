import Image from "next/image";
import styles from "../styles/textOverImage.module.css";
import PropTypes from "prop-types";

function TextOverImage({imageSource, alt, title, description, layout = "intrinsic"}) {
	return (
		<div className={styles.container}>
			<Image className={styles.image} src={imageSource} alt={alt} layout={layout} />
			<div className={styles.textContainer}>
				<h1>{title}</h1>
				<h2>{description}</h2>
			</div>
			<div className={styles.triangleRight}></div>
			<div className={styles.triangleLeft}></div>
		</div>
	);
}

TextOverImage.propTypes = {
	imageSource: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
	alt: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	layout: PropTypes.string,
};

export default TextOverImage;
