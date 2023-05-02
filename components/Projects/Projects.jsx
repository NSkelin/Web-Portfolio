import React from "react";
import styles from "./Projects.module.css";
import ProjectCard from "../ProjectCard/ProjectCard.jsx";
import testImg from "../../public/background_code.png";

const tempDesc = `
D2Statmap is a third party webapp for the videogame Destiny 2. In the game you can collect armor, each with their own unique stats.
After signing in, you’ll be shown a unique heat map for each stat type based off of all your armor.
You can then tell which stats you’re currently lacking so you know what to prioritise.`;

function Projects() {
	return (
		<>
			<div className={styles.projects}>
				<div className={styles.titleWrapper}>
					<h1 className={styles.title}>Projects</h1>
					<div className={styles.line}></div>
				</div>
				<div className={styles.carousel}>
					<ProjectCard
						title={"D2StatMap"}
						description={tempDesc}
						source={"/"}
						example={"/"}
						live={"/"}
						skillIcons={[]}
						src={testImg}
						width={782}
						height={534}
					></ProjectCard>
				</div>
			</div>
		</>
	);
}

Projects.defaultProps = {};

Projects.propTypes = {};

export default Projects;
