import React from "react";
import styles from "./AccentTitle.module.css";

interface AccentTitleProps {
	/**
	 * The title for this section.
	 *
	 * Default: "Title"
	 */
	title?: string;
	/**
	 * The title is wrapped with a header (<h>) tag. This chooses the level for it.
	 *
	 * Default: 2.
	 */
	headingLevel?: number;
}
/**
 * Renders a title with a horizontal bar underneath for sectioning different types of content.
 */
function AccentTitle({title = "Title", headingLevel = 2}: AccentTitleProps) {
	// Throw an error if the heading level is outside the heading range.
	if (headingLevel < 1 || headingLevel > 6) {
		throw new Error(`Error: Prop "headingLevel" outside of range! Must be from 1 - 6. Is: ${headingLevel}`);
	}

	const HTag = `h${headingLevel}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
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
