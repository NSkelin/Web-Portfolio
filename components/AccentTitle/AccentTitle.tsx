import React from "react";
import styles from "./AccentTitle.module.css";

interface AccentTitleProps {
	title: string;
	headingLevel: number;
}
function AccentTitle({title = "Title", headingLevel = 2}: AccentTitleProps) {
	const HTag = `h${headingLevel < 1 || headingLevel > 6 ? 1 : headingLevel}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
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

export default AccentTitle;
