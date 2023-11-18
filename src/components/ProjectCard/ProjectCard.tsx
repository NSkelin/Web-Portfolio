import Image, {ImageProps} from "next/image";
import {GithubMark, OpenInNew} from "public/icons";
import React from "react";
import ProjectSlideDetails, {ProjectSlideDetailsProps} from "../ProjectSlideDetails/ProjectSlideDetails";
import ResponsiveNav from "../ResponsiveNav/";
import styles from "./ProjectCard.module.scss";

export interface ProjectCardProps extends ProjectSlideDetailsProps {
	/**
	 * The project title.
	 */
	title: string;
	/**
	 * The source for the project display image.
	 */
	imageSrc: ImageProps["src"];
	/**
	 * The alt property for the project display image.
	 */
	imageAlt: ImageProps["alt"];
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
 * Renders a swipe-able project card with information on the project, links to project resources, and images.
 */
function ProjectCard({
	title = "Project title",
	description = ["Project description"],
	imageSrc,
	imageAlt,
	githubRepoURL,
	liveSiteURL,
	demoSiteURL,
	technologies,
}: ProjectCardProps) {
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
		<article className={styles.projectCard}>
			<header className={styles.header}>
				<h3>{title}</h3>
				<ResponsiveNav links={[github, view, demo]} />
			</header>
			<div className={styles.content}>
				<div className={styles.imageWrapper}>
					<Image className={styles.image} src={imageSrc} fill={true} alt={imageAlt} />
				</div>
				<ProjectSlideDetails description={description} technologies={technologies} />
			</div>
		</article>
	);
}

export default ProjectCard;
