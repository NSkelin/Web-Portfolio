import Image from "next/image";
import styles from "../styles/textOverImage.module.css";

export default function TextOverImage({imageSource, alt, title, description}) {
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
