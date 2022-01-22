import Image from "next/image";
import styles from "../styles/hyperLink.module.css";

export default function HyperLink({text, icon, icon: {source, height, alt, width}, href}) {
	return (
		<div className={styles.container}>
			<a className={styles.link} href={href}>
				{icon && <Image src={source} width={width} height={height} alt={alt} />}
				<span className={styles.text}>{text}</span>
			</a>
		</div>
	);
}
