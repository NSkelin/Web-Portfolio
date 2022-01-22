import Image from "next/image";
import styles from "../styles/hyperLinkWithIcon.module.css";

export default function HyperLinkWithIcon({text, icon: {source, width, height, alt}, href}) {
	return (
		<div className={styles.hyperLinkWithIcon}>
			<Image src={source} width={width} height={height} alt={alt} />
			<a href={href}>
				<span className={styles.text}>{text}</span>
			</a>
		</div>
	);
}
