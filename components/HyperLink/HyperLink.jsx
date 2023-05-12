import React from "react";
import PropTypes from "prop-types";
import styles from "./HyperLink.module.css";
import Image from "next/image";

function HyperLink({text = "link", src, alt, height, width, href}) {
	return (
		<div className={styles.container}>
			<a className={styles.link} href={href}>
				<Image src={src} alt={alt} height={height} width={width} />
				<span className={styles.text}>{text}</span>
			</a>
		</div>
	);
}

HyperLink.defaultProps = {
	height: 24,
	width: 24,
};

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
