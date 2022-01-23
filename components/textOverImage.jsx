import Image from "next/image";
import styles from "../styles/textOverImage.module.css";
import PropTypes from "prop-types";

function TextOverImage({imageSource, alt, title, description}) {
	return (
		<div className={styles.container}>
			<Image className={styles.image} src={imageSource} alt={alt} />
			<div className={styles.textContainer}>
				<p>{title}</p>
				<p>{description}</p>
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
};

export default TextOverImage;
