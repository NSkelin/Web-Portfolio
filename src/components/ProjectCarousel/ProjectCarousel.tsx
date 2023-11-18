import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {Navigation, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import ProjectCard, {ProjectSlideProps} from "../ProjectSlide/ProjectSlide";
import styles from "./ProjectCarousel.module.scss";

export interface ProjectCarouselProps {
	/**
	 * An array of objects with each object containing the data needed to render one project slide.
	 * The more objects sent, the more slides rendered.
	 */
	projectData: ProjectSlideProps[];
}
/** Renders a carousel of project slides. */
function ProjectCarousel({projectData}: ProjectCarouselProps) {
	// Create the project slides to enter in the carousel.
	const projectSlides = projectData.map(({...rest}, index) => (
		<SwiperSlide key={index}>
			<ProjectCard {...rest} />
		</SwiperSlide>
	));

	return (
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
			{projectSlides}
		</Swiper>
	);
}

export default ProjectCarousel;
