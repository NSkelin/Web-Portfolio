import Image from "next/image";
import styles from "../styles/hyperLinkWithIcon.module.css";

export default function HyperLinkWithIcon({linkText, imageSource, imageWidth, imageHeight, imageAlt, href}) {
	return (
		<div className={styles.hyperLinkWithIcon}>
			<Image src={imageSource} width={imageWidth} height={imageHeight} alt={imageAlt} />
			<a href={href}>
				<span className={styles.linkText}>{linkText}</span>
			</a>
		</div>
	);
}
