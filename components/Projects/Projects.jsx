import React, {forwardRef} from "react";
import styles from "./Projects.module.css";
import ProjectCard from "../ProjectCard/ProjectCard.jsx";
import testImg from "../../public/background_code.png";
import AccentTitle from "../AccentTitle/AccentTitle";
import {register} from "swiper/element/bundle";

register();

const tempDesc = `
D2Statmap is a third party webapp for the videogame Destiny 2. In the game you can collect armor, each with their own unique stats.
After signing in, you’ll be shown a unique heat map for each stat type based off of all your armor.
You can then tell which stats you’re currently lacking so you know what to prioritise.`;

const imageSources = [
	"https://cdn.svgporn.com/logos/react.svg",
	"https://cdn.svgporn.com/logos/nextjs-icon.svg",
	"https://cdn.svgporn.com/logos/javascript.svg",
	"https://cdn.svgporn.com/logos/html-5.svg",
	"https://cdn.svgporn.com/logos/css-3.svg",
];

const Projects = forwardRef(function Projects(props, ref) {
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
				<swiper-slide>
					<ProjectCard
						title={"D2StatMap"}
						description={tempDesc}
						source={"/"}
						example={"/"}
						live={"/"}
						skillIcons={imageSources}
						src={testImg}
						alt={"example image"}
					/>
				</swiper-slide>
				<swiper-slide>
					<ProjectCard
						title={"D2StatMap"}
						description={tempDesc}
						source={"/"}
						example={"/"}
						live={"/"}
						skillIcons={imageSources}
						src={testImg}
						alt={"example image"}
					/>
				</swiper-slide>
				<swiper-slide>
					<ProjectCard
						title={"D2StatMap"}
						description={tempDesc}
						source={"/"}
						example={"/"}
						live={"/"}
						skillIcons={imageSources}
						src={testImg}
						alt={"example image"}
					/>
				</swiper-slide>
			</swiper-container>
		</section>
	);
});

Projects.defaultProps = {};

Projects.propTypes = {};

export default Projects;
