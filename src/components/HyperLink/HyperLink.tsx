import React from "react";
import {ButtonStyles} from "../Button";
import styles from "./HyperLink.module.scss";

export interface HyperLinkProps {
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
function HyperLink({style, href, children}: HyperLinkProps) {
	return (
		<a className={style} href={href}>
			<div className={styles.stateLayer}>{children}</div>
		</a>
	);
}

export default HyperLink;
