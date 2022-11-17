import {Icon} from "@iconify/react";
import Image from "next/image";
import styles from "../styles/linkCard.module.css";
import {useState} from "react";
import PropTypes from "prop-types";

function LinkCard({backgroundImage, title, links}) {
	const [hovered, setHover] = useState(false);

	const linkElements = links.map(({link, icon: {source, width = 24, height = 24, color = "darkgray"}}, index) => {
		return (
			<a key={index} href={link}>
				<Icon className={styles.icon} icon={source} width={width} height={height} color={color} />
			</a>
		);
	});

	if (hovered) {
		return (
			<div onMouseLeave={() => setHover(false)} className={styles.linkCard}>
				<Image
					className={styles.overlay}
					src={backgroundImage}
					alt="Icon to represent the skill"
					width="250"
					height="175"
				/>
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
				<Image
					className={styles.cardImg}
					src={backgroundImage}
					alt="Icon to represent the skill"
					width="250"
					height="175"
				/>
			</div>
		);
	}
}

LinkCard.propTypes = {
	backgroundImage: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
	title: PropTypes.string.isRequired,
	links: PropTypes.arrayOf(
		PropTypes.shape({
			link: PropTypes.string,
			icon: PropTypes.shape({
				source: PropTypes.string,
				width: PropTypes.number,
				height: PropTypes.number,
				color: PropTypes.string,
			}),
		})
	).isRequired,
};

export default LinkCard;
