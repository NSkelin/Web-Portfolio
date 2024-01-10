import {GithubMark, OpenInNew} from "public/icons";
import React, {useEffect, useState} from "react";
import LinkButton from "../LinkButton";
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
	const [windowWidth, setWindowWidth] = useState(1000);
	const desktopWidthBreakpoint = 905;

	// Keep the windowWidth state in sync with the browser window width.
	useEffect(() => {
		function handleResize() {
			setWindowWidth(window.innerWidth);
		}

		// Set the initial window width on first load.
		setWindowWidth(window.innerWidth);

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const githubButton = githubRepoURL ? (
		<LinkButton href={githubRepoURL} style={windowWidth >= desktopWidthBreakpoint ? "outlined" : "text"}>
			<GithubMark className={styles.buttonIcon} />
			GitHub
		</LinkButton>
	) : null;
	const liveSiteButton = liveSiteURL ? (
		<LinkButton href={liveSiteURL} style={windowWidth >= desktopWidthBreakpoint ? "filled" : "text"}>
			<OpenInNew className={styles.buttonIconAlt} />
			Live
		</LinkButton>
	) : null;
	const DemoButton = demoSiteURL ? (
		<LinkButton href={demoSiteURL} style={windowWidth >= desktopWidthBreakpoint ? "outlined" : "text"}>
			<OpenInNew className={styles.buttonIcon} />
			Demo
		</LinkButton>
	) : null;

	return (
		<header className={styles.header}>
			<h3>{title}</h3>
			<ResponsiveNav>
				{githubButton}
				{DemoButton}
				{liveSiteButton}
			</ResponsiveNav>
		</header>
	);
}

export default ProjectCardHeader;
