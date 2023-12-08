import {GithubMark, OpenInNew} from "public/icons";
import React, {ComponentProps} from "react";
import ResponsiveNav from "../ResponsiveNav";
import styles from "./ProjectCardHeader.module.scss";

export interface ProjectCardHeaderProps {
	/**
	 * The project title.
	 */
	title: string;
	/**
	 * An optional URL that links to the projects source code repository on github. A github URL is expected and the icon will represent GitHub.
	 */
	githubRepoURL?: string;
	/**
	 * An optional URL that links to the live site for the project.
	 */
	liveSiteURL?: string;
	/**
	 * An optional URL that links the users to a example / demo version of the site.
	 * This can be used to allow users to view / experience the project without needing to create an account for example.
	 */
	demoSiteURL?: string;
}
/**
 * Renders the header of a project card, for use with the ProjectCard component.
 * The header contains the projects title and links to further resources such as the source code and live sites running the project.
 */
function ProjectCardHeader({title, githubRepoURL, liveSiteURL, demoSiteURL}: ProjectCardHeaderProps) {
	/**
	 * Creates a link button for the header.
	 *
	 * @param style The style to apply to the link button.
	 * @param href The URL to link to.
	 * @param text The text to display on the link button.
	 * @param Icon The icon to display on the link button.
	 */
	function createLinkButton(style: string, href: string, text: string, Icon: React.ComponentType<ComponentProps<"svg">>) {
		return (
			<a className={style} href={href}>
				<div className={styles.stateLayer}>
					<Icon className={styles.materialSymbol} />
					{text}
				</div>
			</a>
		);
	}

	const github = githubRepoURL ? createLinkButton(styles.outline, githubRepoURL, "GitHub", GithubMark) : null;
	const view = liveSiteURL ? createLinkButton(styles.fill, liveSiteURL, "Live", OpenInNew) : null;
	const demo = demoSiteURL ? createLinkButton(styles.outline, demoSiteURL, "Demo", OpenInNew) : null;

	return (
		<header className={styles.header}>
			<h3>{title}</h3>
			<ResponsiveNav>
				{github}
				{demo}
				{view}
			</ResponsiveNav>
		</header>
	);
}

export default ProjectCardHeader;
