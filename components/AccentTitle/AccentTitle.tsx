import React from "react";
import styles from "./AccentTitle.module.css";

interface AccentTitleProps {
	/** The title for this section.
	 *
	 * Defaults to: Title
	 */
	title: string;
	/**
	 * The title is wrapped with a header (<h>) tag. This chooses the level for it.
	 *
	 * Defaults to: 2.
	 */
	headingLevel: number;
}
/**
 * Renders a title with a horizontal bar underneath for sectioning different types of content.
 */
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
