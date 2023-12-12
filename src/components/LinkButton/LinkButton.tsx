import React from "react";
import {ButtonStyles} from "../Button";
import styles from "./LinkButton.module.scss";

export interface LinkButtonProps {
	/**
	 * Pre-made styles that loosely follow googles material design.
	 */
	style: ButtonStyles;
	/**
	 * The destination clicking the link leads to.
	 */
	href: string;
	/**
	 * The content to display inside the link.
	 */
	children: React.ReactNode;
}
/**
 * Renders a hyperlink text with an icon next to it.
 */
function LinkButton({style, href, children}: LinkButtonProps) {
	return (
		<a className={styles[style]} href={href}>
			<div className={styles.stateLayer}>{children}</div>
		</a>
	);
}

export default LinkButton;
