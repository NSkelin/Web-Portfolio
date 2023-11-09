import React, {ComponentProps} from "react";
import styles from "./HyperLink.module.css";

export interface HyperLinkProps {
	text?: string;
	Icon: React.ComponentType<ComponentProps<"svg">>;
	href: string;
}
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
