import {Icon} from "@iconify/react";
import styles from "../styles/hyperLink.module.css";
import PropTypes from "prop-types";

function HyperLink({text = "link", icon: {source, height = 35, color = "white", width = 35}, href}) {
	return (
		<div className={styles.container}>
			<a className={styles.link} href={href}>
				{source && <Icon icon={source} width={width} height={height} color={color} />}
				<span className={styles.text}>{text}</span>
			</a>
		</div>
	);
}

HyperLink.propTypes = {
	text: PropTypes.string,
	href: PropTypes.string.isRequired,
	icon: PropTypes.shape({
		source: PropTypes.string.isRequired,
		height: PropTypes.number,
		width: PropTypes.number,
		color: PropTypes.string,
	}),
};

export default HyperLink;
