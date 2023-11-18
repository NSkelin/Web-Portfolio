import React, {forwardRef} from "react";
import AccentTitle from "../AccentTitle/AccentTitle";
import ProjectCarousel, {ProjectCarouselProps} from "../ProjectCarousel/ProjectCarousel";
import styles from "./ProjectSection.module.scss";

interface ProjectsProps extends ProjectCarouselProps {}
/**
 * Renders a section with a title and carousel of project cards.
 */
const Projects = forwardRef<HTMLElement, ProjectsProps>(function Projects({projectData}, ref) {
	return (
		<section ref={ref} className={styles.projects}>
			<AccentTitle title={"Projects"} />
			<div className={styles.spacer}></div>
			<ProjectCarousel projectData={projectData} />
		</section>
	);
});

export default Projects;
