import React, {ComponentProps} from "react";
import styles from "./HyperLink.module.css";

export interface HyperLinkProps {
	/** The text that will be a clickable hyperlink. */
	text?: string;
	/** The icon to place next to the hyperlink. */
	Icon: React.ComponentType<ComponentProps<"svg">>;
	/** The destination clicking the link leads to. */
	href: string;
}
/**
 * Renders a hyperlink text with an icon next to it.
 */
function HyperLink({text = "link", Icon, href}: HyperLinkProps) {
	return (
		<div className={styles.container}>
			<a className={styles.link} href={href}>
				<Icon className={styles.icon} />
				<span className={styles.text}>{text}</span>
			</a>
		</div>
	);
}

export default HyperLink;
