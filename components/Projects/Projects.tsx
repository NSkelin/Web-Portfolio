import React, {forwardRef} from "react";
import {register} from "swiper/element/bundle";
import AccentTitle from "../AccentTitle/AccentTitle";
import ProjectCard, {ProjectCardProps} from "../ProjectCard/ProjectCard";
import styles from "./Projects.module.css";

register();

interface ProjectsProps {
	cards: {
		title: ProjectCardProps["title"];
		description: ProjectCardProps["description"];
		image: ProjectCardProps["src"];
		techIcons: ProjectCardProps["skillIcons"];
		githubURL: ProjectCardProps["source"];
		liveURL: ProjectCardProps["live"];
		demoURL: ProjectCardProps["example"];
	}[];
}
const Projects = forwardRef<HTMLElement, ProjectsProps>(function Projects({cards}, ref) {
	const projectCards = cards.map(({title, description, image, techIcons, githubURL, liveURL, demoURL}, index) => (
		<swiper-slide key={index}>
			{" "}
			<ProjectCard
				title={title}
				description={description}
				source={githubURL}
				example={demoURL}
				live={liveURL}
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
				class="swiper-initialized swiper-horizontal swiper-backface-hidden"
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

export default Projects;
