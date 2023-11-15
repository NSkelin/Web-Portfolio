import Image, {ImageProps} from "next/image";
import React, {ComponentProps} from "react";
import {FreeMode, Mousewheel, Scrollbar} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import {GithubMark, OpenInNew} from "../../public/icons";
import ResponsiveNav from "../ResponsiveNav/";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
	/** The project title. */
	title: string;
	/** The description for the project. Each string in the array is consideres a paragraph. So each new item in the array falls under a new <p> tag. */
	description: string[];
	/** The source for the project display image. */
	src: ImageProps["src"];
	/** The alt property for the project display image. */
	alt: ImageProps["alt"];
	/** The URL to the source code. */
	source?: string;
	/** The URL to the live site. */
	live?: string;
	/** The URL to the demo site. */
	example?: string;
	/** Icons for all the technologies related to the project that will be displayed in the footer. */
	skillIcons: React.ComponentType<ComponentProps<"svg">>[];
}
/**
 * Renders a swipe-able project card with information on the project, links to project resources, and images.
 */
function ProjectCard({
	title = "Project title",
	description = ["Project description"],
	src,
	alt,
	source,
	live,
	example,
	skillIcons,
}: ProjectCardProps) {
	// Create links to specific sources for the project if they exist.
	// Link to project github page.
	const github = source ? (
		<a className={styles.navItemGithub} href={source}>
			Github
			<GithubMark />
		</a>
	) : null;
	// Link to projects live site.
	const view = live ? (
		<a className={styles.navItem} href={live}>
			View
			<OpenInNew className={styles.materialSymbol} />
		</a>
	) : null;
	// Link to a site containing a demo version of the project.
	const demo = example ? (
		<a className={styles.navItem} href={example}>
			Demo
			<OpenInNew className={styles.materialSymbol} />
		</a>
	) : null;

	// Creates the list items that contain icons that represent the technologies used in the project.
	const skills = skillIcons.map((Icon, index) => (
		<li className={styles.icon} key={index}>
			<Icon />
		</li>
	));

	// Creates the description text. Separates the string items in the array into new paragraphs.
	const text = description.map((paragraph, index) => (
		<p className={styles.p} key={index}>
			{paragraph}
		</p>
	));

	return (
		<article className={styles.projectCard}>
			<header className={styles.header}>
				<h3>{title}</h3>
				<ResponsiveNav links={[github, view, demo]} />
			</header>
			<div className={styles.content}>
				<div className={styles.imageWrapper}>
					<Image className={styles.image} src={src} fill={true} alt={alt} />
				</div>
				<div className={styles.details}>
					<Swiper
						modules={[Scrollbar, FreeMode, Mousewheel]}
						className={
							"swiper-initialized swiper-vertical swiper-free-mode swiper-backface-hidden " + styles.descriptionBox
						}
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
						<h4 className={styles.title}>Project Technologies</h4>
						<div className={styles.line}></div>
						<ul className={styles.icons}>{skills}</ul>
					</aside>
				</div>
			</div>
		</article>
	);
}

export default ProjectCard;
