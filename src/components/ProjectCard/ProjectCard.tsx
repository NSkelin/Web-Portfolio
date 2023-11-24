import React from "react";
import ProjectCardDetails, {ProjectCardDetailsProps} from "../ProjectCardDetails";
import ProjectCardGallery, {ProjectCardGalleryProps} from "../ProjectCardGallery/ProjectCardGallery";
import ProjectCardHeader, {ProjectCardHeaderProps} from "../ProjectCardHeader";
import styles from "./ProjectCard.module.scss";

export interface ProjectCardProps extends ProjectCardHeaderProps, ProjectCardDetailsProps, ProjectCardGalleryProps {}
/**
 * Renders a card with information on a project.
 *
 * The card includes the project title, navigation links to project resources, a description of the project,
 * the technologies used to make the project, and a gallery to show off the project.
 */
function ProjectCard({
	title = "Project title",
	description = ["Project description"],
	images,
	githubRepoURL,
	liveSiteURL,
	demoSiteURL,
	technologies,
}: ProjectCardProps) {
	return (
		<article className={styles.projectCard}>
			<ProjectCardHeader title={title} githubRepoURL={githubRepoURL} liveSiteURL={liveSiteURL} demoSiteURL={demoSiteURL} />
			<div className={styles.content}>
				<ProjectCardGallery images={images} />
				<ProjectCardDetails description={description} technologies={technologies} />
			</div>
		</article>
	);
}

export default ProjectCard;
