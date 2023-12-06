import {ArrowDownward} from "public/icons";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {Navigation, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import Button from "../Button";
import ProjectCard, {ProjectCardProps} from "../ProjectCard";
import styles from "./ProjectCarousel.module.scss";

export interface ProjectCarouselProps {
	/**
	 * An array of objects with each object containing the data needed to render one project card.
	 * The more objects sent, the more project card slides rendered.
	 */
	projectData: ProjectCardProps[];
}
/**
 * Renders a carousel of project cards, with each slide being one project card.
 */
function ProjectCarousel({projectData}: ProjectCarouselProps) {
	// Create the project slides to enter in the carousel.
	const projectSlides = projectData.map(({...rest}, index) => (
		<SwiperSlide className={styles.slide} key={index}>
			<ProjectCard {...rest} />
		</SwiperSlide>
	));

	return (
		<Swiper
			className={styles.swiper}
			modules={[Navigation, Pagination]}
			slidesPerView={1}
			navigation={{
				enabled: true,
				prevEl: `.${styles.navPrev}`,
				nextEl: `.${styles.navNext}`,
			}}
			pagination={{enabled: true, el: `.${styles.pagination}`}}
			spaceBetween={80}
			longSwipes={false}
			loop={true}
			touchStartPreventDefault={false}
		>
			{projectSlides}
			<div className={styles.navContainer}>
				<div className={styles.navPrev}>
					<Button buttonStyle="text">
						<ArrowDownward className={styles.materialSymbol} />
						Previous
					</Button>
				</div>
				<div className={styles.pagination} />
				<div className={styles.navNext}>
					<Button buttonStyle="text">
						Next
						<ArrowDownward className={styles.materialSymbol} />
					</Button>
				</div>
			</div>
		</Swiper>
	);
}

export default ProjectCarousel;
