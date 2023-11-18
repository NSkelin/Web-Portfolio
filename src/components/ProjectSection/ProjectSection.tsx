import React, {forwardRef} from "react";
import AccentTitle from "../AccentTitle/AccentTitle";
import ProjectCarousel, {ProjectCarouselProps} from "../ProjectCarousel/ProjectCarousel";
import styles from "./ProjectSection.module.scss";

interface ProjectSectionProps extends ProjectCarouselProps {}
/**
 * Renders a section for showing off projects. It comes with a title and carousel of project cards.
 */
const Projects = forwardRef<HTMLElement, ProjectSectionProps>(function Projects({projectData}, ref) {
	return (
		<section ref={ref} className={styles.projects}>
			<AccentTitle title={"Projects"} />
			<div className={styles.spacer}></div>
			<ProjectCarousel projectData={projectData} />
		</section>
	);
});

export default Projects;
