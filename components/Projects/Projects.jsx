import React, {forwardRef} from "react";
import styles from "./Projects.module.css";
import ProjectCard from "../ProjectCard/ProjectCard.jsx";
import AccentTitle from "../AccentTitle/AccentTitle";
import {register} from "swiper/element/bundle";

register();

const Projects = forwardRef(function Projects({cards}, ref) {
	const projectCards = cards.map(({title, description, image, techIcons, githubURL, liveURL, demoURL}, index) => (
		<swiper-slide key={index}>
			{" "}
			<ProjectCard
				title={title}
				description={description}
				source={githubURL}
				example={liveURL}
				live={demoURL}
				skillIcons={techIcons}
				src={image}
				alt={"example image"}
			/>
		</swiper-slide>
	));
	return (
		<section ref={ref} className={styles.projects}>
			<AccentTitle title={"Projects"} />
			<div className={styles.spacer}></div>
			<swiper-container
				slides-per-view="1"
				navigation="true"
				pagination="true"
				space-between="80"
				long-swipes={false}
				loop="true"
			>
				{projectCards}
			</swiper-container>
		</section>
	);
});

Projects.defaultProps = {};

Projects.propTypes = {};

export default Projects;
