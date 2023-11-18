import Image, {ImageProps} from "next/image";
import React from "react";
import ProjectSlideDetails, {ProjectSlideDetailsProps} from "../ProjectSlideDetails";
import ProjectSlideHeader, {ProjectSlideHeaderProps} from "../ProjectSlideHeader";
import styles from "./ProjectSlide.module.scss";

export interface ProjectSlideProps extends ProjectSlideHeaderProps, ProjectSlideDetailsProps {
	/**
	 * The source for the project display image.
	 */
	imageSrc: ImageProps["src"];
	/**
	 * The alt property for the project display image.
	 */
	imageAlt: ImageProps["alt"];
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
}: ProjectSlideProps) {
	return (
		<article className={styles.projectCard}>
			<ProjectSlideHeader title={title} githubRepoURL={githubRepoURL} liveSiteURL={liveSiteURL} demoSiteURL={demoSiteURL} />
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
