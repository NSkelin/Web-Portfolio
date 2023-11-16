import React, {ComponentProps} from "react";
import {FreeMode, Mousewheel, Scrollbar} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import styles from "./ProjectSlideDetails.module.scss";

export interface ProjectSlideDetailsProps {
	/**
	 * The description for the project. Each string in the array is consideres a paragraph. So each new item in the array falls under a new \<p> tag.
	 */
	description: string[];
	/**
	 * Icons for all the technologies related to the project that will be displayed in the footer.
	 */
	skillIcons: React.ComponentType<ComponentProps<"svg">>[];
}
function ProjectSlideDetails({description, skillIcons}: ProjectSlideDetailsProps) {
	// Creates the description text. Separates the string items in the array into new paragraphs.
	const text = description.map((paragraph, index) => (
		<p className={styles.p} key={index}>
			{paragraph}
		</p>
	));

	// Creates the list items that contain icons that represent the technologies used in the project.
	const skills = skillIcons.map((Icon, index) => (
		<li className={styles.icon} key={index}>
			<Icon />
		</li>
	));

	return (
		<div className={styles.details}>
			{/* Uses Swiper to allow overflow while nested inside another Swiper. */}
			<Swiper
				modules={[Scrollbar, FreeMode, Mousewheel]}
				className={"swiper-initialized swiper-vertical swiper-free-mode swiper-backface-hidden " + styles.descriptionBox}
				scrollbar={true}
				direction="vertical"
				slidesPerView="auto"
				freeMode={true}
				mousewheel={true}
				touchReleaseOnEdges={true}
			>
				<SwiperSlide>{text}</SwiperSlide>
			</Swiper>

			<aside className={styles.aside}>
				<h4>Project Technologies</h4>
				<div className={styles.line}></div>
				<ul className={styles.icons}>{skills}</ul>
			</aside>
		</div>
	);
}

export default ProjectSlideDetails;
