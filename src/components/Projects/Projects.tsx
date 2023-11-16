import React, {forwardRef} from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {Navigation, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import AccentTitle from "../AccentTitle/AccentTitle";
import ProjectCard, {ProjectCardProps} from "../ProjectCard/ProjectCard";
import styles from "./Projects.module.css";

interface ProjectsProps {
	/**
	 * A list of the data needed to make each project card.
	 */
	cards: ProjectCardProps[];
}
/**
 * Renders a section with a title and carousel of project cards.
 */
const Projects = forwardRef<HTMLElement, ProjectsProps>(function Projects({cards}, ref) {
	// Create the carousel slides.
	const projectCards = cards.map(({...rest}, index) => (
		<SwiperSlide key={index}>
			<ProjectCard {...rest} />
		</SwiperSlide>
	));

	return (
		<section ref={ref} className={styles.projects}>
			<AccentTitle title={"Projects"} />
			<div className={styles.spacer}></div>
			<Swiper
				className={styles.swiper}
				modules={[Navigation, Pagination]}
				slidesPerView={1}
				navigation={true}
				pagination={true}
				spaceBetween={80}
				longSwipes={false}
				loop={true}
			>
				{projectCards}
			</Swiper>
		</section>
	);
});

export default Projects;
