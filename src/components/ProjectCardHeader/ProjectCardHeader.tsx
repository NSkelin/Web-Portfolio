import {GithubMark, OpenInNew} from "public/icons";
import React from "react";
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
function ProjectCardHeader({title, githubRepoURL, liveSiteURL, demoSiteURL}: ProjectCardHeaderProps) {
	// Create links to specific sources for the project if they exist.
	// Link to project github page.
	const github = githubRepoURL ? (
		<a className={styles.navItemGithub} href={githubRepoURL}>
			Github
			<GithubMark />
		</a>
	) : null;
	// Link to projects live site.
	const view = liveSiteURL ? (
		<a className={styles.navItem} href={liveSiteURL}>
			View
			<OpenInNew className={styles.materialSymbol} />
		</a>
	) : null;
	// Link to a site containing a demo version of the project.
	const demo = demoSiteURL ? (
		<a className={styles.navItem} href={demoSiteURL}>
			Demo
			<OpenInNew className={styles.materialSymbol} />
		</a>
	) : null;

	return (
		<header className={styles.header}>
			<h3>{title}</h3>
			<ResponsiveNav links={[github, view, demo]} />
		</header>
	);
}

export default ProjectCardHeader;
