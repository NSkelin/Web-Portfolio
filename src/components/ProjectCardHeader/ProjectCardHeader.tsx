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
/**
 * Renders the header of a project card, for use with the ProjectCard component.
 * The header contains the projects title and links to further resources such as the source code and live sites running the project.
 */
function ProjectCardHeader({title, githubRepoURL, liveSiteURL, demoSiteURL}: ProjectCardHeaderProps) {
	// Create links to specific sources for the project if they exist.
	// Link to project github page.
	const github = githubRepoURL ? (
		<a className={styles.outline} href={githubRepoURL}>
			<div className={styles.stateLayer}>
				<GithubMark className={styles.materialSymbol} />
				Github
			</div>
		</a>
	) : null;
	// Link to projects live site.
	const view = liveSiteURL ? (
		<a className={styles.fill} href={liveSiteURL}>
			<div className={styles.stateLayer}>
				<OpenInNew className={styles.materialSymbol} />
				Live
			</div>
		</a>
	) : null;
	// Link to a site containing a demo version of the project.
	const demo = demoSiteURL ? (
		<a className={styles.outline} href={demoSiteURL}>
			<div className={styles.stateLayer}>
				<OpenInNew className={styles.materialSymbol} />
				Demo
			</div>
		</a>
	) : null;

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
