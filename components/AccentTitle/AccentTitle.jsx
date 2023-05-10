import React from "react";
import PropTypes from "prop-types";
import styles from "./AccentTitle.module.css";

function AccentTitle({title, headingLevel}) {
	const HTag = `h${headingLevel < 1 || headingLevel > 6 ? 1 : headingLevel}`;
	return (
		<div className={styles.container}>
			<div className={styles.titleWrapper}>
				<span className={styles.spacer}></span>
				<HTag className={styles.title}>{title}</HTag>
			</div>
			<div className={styles.accentLine} />
		</div>
	);
}

AccentTitle.defaultProps = {
	title: "Title",
	headingLevel: 2,
};

AccentTitle.propTypes = {
	title: PropTypes.string,
	headingLevel: PropTypes.number,
};

export default AccentTitle;
