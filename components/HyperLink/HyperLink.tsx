import React from "react";
import PropTypes from "prop-types";
import styles from "./HyperLink.module.css";

function HyperLink({text, Icon, href}) {
	return (
		<div className={styles.container}>
			<a className={styles.link} href={href}>
				<Icon className={styles.icon} />
				<span className={styles.text}>{text}</span>
			</a>
		</div>
	);
}

HyperLink.defaultProps = {
	text: "link",
};

HyperLink.propTypes = {
	text: PropTypes.string,
	href: PropTypes.string.isRequired,
	icon: PropTypes.object,
};

export default HyperLink;
