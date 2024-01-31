import React, {ComponentProps} from "react";
import LinkButton, {LinkButtonProps} from "../LinkButton";
import styles from "./SocialLinks.module.scss";

export interface SocialLinksProps {
	/**
	 * The links that will be placed under the social links area.
	 */
	links: {
		/**
		 * The text that will be a clickable hyperlink.
		 */
		text?: string;
		/**
		 * The icon to place next to the hyperlink.
		 */
		Icon: React.ComponentType<ComponentProps<"svg">>;
		href: LinkButtonProps["href"];
	}[];
}
function SocialLinks({links}: SocialLinksProps) {
	const linkElement = links.map(({Icon, text, href}, index) => {
		return (
			<LinkButton key={index} href={href} style="text">
				<Icon className={styles.icon} /> {text}
			</LinkButton>
		);
	});

	return (
		<section className={styles.socials}>
			<h2 className={styles.title}>Social</h2>
			<address className={styles.contentWrapper}>{linkElement}</address>
		</section>
	);
}

export default SocialLinks;
