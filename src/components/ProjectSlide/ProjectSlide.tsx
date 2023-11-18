import React from "react";
import ProjectSlideDetails, {ProjectSlideDetailsProps} from "../ProjectSlideDetails";
import ProjectSlideGallery, {ProjectSlideGalleryProps} from "../ProjectSlideGallery/ProjectSlideGallery";
import ProjectSlideHeader, {ProjectSlideHeaderProps} from "../ProjectSlideHeader";
import styles from "./ProjectSlide.module.scss";

export interface ProjectSlideProps extends ProjectSlideHeaderProps, ProjectSlideDetailsProps, ProjectSlideGalleryProps {}
/**
 * Renders a swipe-able project card with information on the project, links to project resources, and images.
 */
function ProjectSlide({
	title = "Project title",
	description = ["Project description"],
	imageSrc,
	imageAlt,
	githubRepoURL,
	liveSiteURL,
	demoSiteURL,
	technologies,
}: ProjectSlideProps) {
	return (
		<article className={styles.projectCard}>
			<ProjectSlideHeader title={title} githubRepoURL={githubRepoURL} liveSiteURL={liveSiteURL} demoSiteURL={demoSiteURL} />
			<div className={styles.content}>
				<ProjectSlideGallery imageSrc={imageSrc} imageAlt={imageAlt} />
				<ProjectSlideDetails description={description} technologies={technologies} />
			</div>
		</article>
	);
}

export default ProjectSlide;
