import Image, {ImageProps} from "next/image";
import React, {ComponentProps} from "react";
import {FreeMode, Mousewheel, Scrollbar} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import {GithubMark, OpenInNew} from "../../public/icons";
import ResponsiveNav from "../ResponsiveNav/";
import styles from "./ProjectCard.module.css";

export interface ProjectCardProps {
	/** The project title. */
	title: string;
	/** The description for the project. Each string in the array is consideres a paragraph. So each new item in the array falls under a new <p> tag. */
	description: string[];
	/** The source for the project display image. */
	imageSrc: ImageProps["src"];
	/** The alt property for the project display image. */
	imageAlt: ImageProps["alt"];
	/** An optional URL that links to the projects source code repository on github. A github URL is expected and the icon will represent GitHub.  */
	githubRepoURL?: string;
	/** An optional URL that links to the live site for the project. */
	liveSiteURL?: string;
	/** An optional URL that links the users to a example / demo version of the site.
	 * This can be used to allow users to view / experience the project without needing to create an account for example.*/
	demoSiteURL?: string;
	/** Icons for all the technologies related to the project that will be displayed in the footer. */
	skillIcons: React.ComponentType<ComponentProps<"svg">>[];
}
/**
 * Renders a swipe-able project card with information on the project, links to project resources, and images.
 */
function ProjectCard({
	title = "Project title",
	description = ["Project description"],
	imageSrc,
	imageAlt,
	githubRepoURL,
	liveSiteURL,
	demoSiteURL,
	skillIcons,
}: ProjectCardProps) {
	// Create links to specific sources for the project if they exist.
	// Link to project github page.
	const github = githubRepoURL ? (
		<a className={styles.navItemGithub} href={githubRepoURL}>
			Github
			<GithubMark />
		</a>
	) : null;
	// Link to projects live site.
	const view = liveSiteURL ? (
		<a className={styles.navItem} href={liveSiteURL}>
			View
			<OpenInNew className={styles.materialSymbol} />
		</a>
	) : null;
	// Link to a site containing a demo version of the project.
	const demo = demoSiteURL ? (
		<a className={styles.navItem} href={demoSiteURL}>
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
					<Image className={styles.image} src={imageSrc} fill={true} alt={imageAlt} />
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
