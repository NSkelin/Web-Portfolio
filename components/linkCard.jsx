import Image from "next/image";
import styles from "../styles/linkCard.module.css";
import {useState} from "react";

export default function LinkCard({backgroundImage, title, links}) {
	const [hovered, setHover] = useState(false);

	const linkElements = links.map((link, index) => {
		return (
			<a key={index} href={link.link}>
				<Image className={styles.icon} src={link.image} width="35" height="35" alt="icon" />
			</a>
		);
	});

	if (hovered) {
		return (
			<div onMouseLeave={() => setHover(false)} className={styles.linkCard}>
				<Image className={styles.overlay} src={backgroundImage} alt="Icon to represent the skill" width="250" height="175" />
				<div className={styles.overlay}>
					<div className={styles.iconContainer}>{linkElements}</div>
					<div className={styles.siteName}>
						<b>{title}</b>
					</div>

					<div className={styles.iconContainer}></div>
				</div>
			</div>
		);
	} else {
		return (
			<div onMouseEnter={() => setHover(true)} className={styles.linkCard}>
				<Image className={styles.cardImg} src={backgroundImage} alt="Icon to represent the skill" width="250" height="175" />
			</div>
		);
	}
}
