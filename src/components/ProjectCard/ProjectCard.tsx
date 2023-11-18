import React from "react";
import ProjectCardDetails, {ProjectCardDetailsProps} from "../ProjectCardDetails";
import ProjectCardGallery, {ProjectCardGalleryProps} from "../ProjectCardGallery/ProjectCardGallery";
import ProjectCardHeader, {ProjectCardHeaderProps} from "../ProjectCardHeader";
import styles from "./ProjectCard.module.scss";

export interface ProjectCardProps extends ProjectCardHeaderProps, ProjectCardDetailsProps, ProjectCardGalleryProps {}
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
	return (
		<article className={styles.projectCard}>
			<ProjectCardHeader title={title} githubRepoURL={githubRepoURL} liveSiteURL={liveSiteURL} demoSiteURL={demoSiteURL} />
			<div className={styles.content}>
				<ProjectCardGallery imageSrc={imageSrc} imageAlt={imageAlt} />
				<ProjectCardDetails description={description} technologies={technologies} />
			</div>
		</article>
	);
}

export default ProjectCard;
