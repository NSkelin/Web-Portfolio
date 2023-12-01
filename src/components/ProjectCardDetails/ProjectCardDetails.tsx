import {ChevronUp} from "public/icons";
import React, {ComponentProps, useState} from "react";
import {FreeMode, Mousewheel, Scrollbar} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import CollapsibleArea from "../CollapsibleArea";
import styles from "./ProjectCardDetails.module.scss";

export interface ProjectCardDetailsProps {
	/**
	 * The description for the project. Each string in the array is consideres a paragraph. So each new item in the array falls under a new \<p> tag.
	 */
	description: string[];
	/**
	 * The name and icon of all the technologies related to the project that will be displayed in the footer.
	 */
	technologies: {
		name: string;
		Icon: React.ComponentType<ComponentProps<"svg">>;
	}[];
}
/**
 * Renders the detail section containing the information on the project, for use with the ProjectCard component.
 *
 * The detail section contains a description of the project and the technologies used to create the project.
 */
function ProjectCardDetails({description, technologies}: ProjectCardDetailsProps) {
	const [collapsed, setCollapsed] = useState(true);
	const [collapsedDelayed, setCollapsedDelayed] = useState(true); // Delays to sync with the collapsing animation.

	// Creates the description text. Separates the string items in the array into new paragraphs.
	const descriptionParagraphs = description.map((paragraph, index) => <p key={index}>{paragraph}</p>);

	// Creates the technologies list to represent the technologies used in the project.
	const techIcons = technologies.map(({name, Icon}, index) => (
		<li className={styles.technology} key={index}>
			<Icon className={styles.techIcon} />
			{collapsedDelayed ? null : name}
		</li>
	));

	/**
	 * Inverts the collapsed state booleans. The delayed state is set to true at a delay to sync with the animation that plays.
	 */
	function toggleCollapsed() {
		setCollapsed(!collapsed);
		if (!collapsedDelayed) {
			setTimeout(() => {
				setCollapsedDelayed(true);
			}, 700);
		} else {
			setCollapsedDelayed(false);
		}
	}

	return (
		<div className={styles.details}>
			{/* Uses Swiper to allow overflow while nested inside another Swiper. */}
			<Swiper
				modules={[Scrollbar, FreeMode, Mousewheel]}
				className={styles.descriptionBox}
				scrollbar={true}
				direction="vertical"
				slidesPerView="auto"
				freeMode={true}
				mousewheel={true}
				touchReleaseOnEdges={true}
			>
				<SwiperSlide>{descriptionParagraphs}</SwiperSlide>
			</Swiper>

			<CollapsibleArea
				collapsed={collapsed}
				fadeColor={[55, 55, 55]}
				expandedHeight="75%"
				collapsedHeight={{desktop: "137px", tablet: "137px", mobile: "123px"}}
			>
				<aside className={styles.aside}>
					<div className={styles.titleBar}>
						<h4>Project Technologies</h4>
						<button className={styles.toggleButton} onClick={toggleCollapsed}>
							<div className={styles.toggleText}>{collapsed ? "more" : "less"}</div>
							<ChevronUp
								style={{rotate: collapsed ? "0deg" : "-180deg"}}
								className={styles.materialSymbol}
							></ChevronUp>
						</button>
					</div>
					<div className={styles.line}></div>
					<ul className={collapsedDelayed ? styles.collapsedTechList : styles.expandedTechList}>{techIcons}</ul>
				</aside>
			</CollapsibleArea>
		</div>
	);
}

export default ProjectCardDetails;
