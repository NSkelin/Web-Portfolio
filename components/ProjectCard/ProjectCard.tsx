import React from "react";
import PropTypes from "prop-types";
import styles from "./ProjectCard.module.css";
import Image from "next/image";
import {GithubMark} from "../../public/icons";
import ResponsiveNav from "../ResponsiveNav/";
import {register} from "swiper/element/bundle";
import {OpenInNew} from "../../public/icons";

register();

function ProjectCard({title, description, src, alt, source, live, example, skillIcons}) {
	const github = source ? (
		<a className={styles.navItemGithub} href={source}>
			Github
			<GithubMark />
		</a>
	) : null;
	const view = live ? (
		<a className={styles.navItem} href={live}>
			View
			<OpenInNew className={styles.materialSymbol} />
		</a>
	) : null;
	const demo = example ? (
		<a className={styles.navItem} href={example}>
			Demo
			<OpenInNew className={styles.materialSymbol} />
		</a>
	) : null;

	const skills = skillIcons.map((Icon, index) => (
		<li className={styles.icon} key={index}>
			<Icon />
		</li>
	));

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
					<swiper-container
						class={
							"swiper-initialized swiper-vertical swiper-free-mode swiper-backface-hidden " + styles.descriptionBox
						}
						scrollbar="true"
						direction="vertical"
						slides-per-view="auto"
						free-mode="true"
						mousewheel="true"
						touch-release-on-edges="true"
					>
						<swiper-slide>{text}</swiper-slide>
					</swiper-container>
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

ProjectCard.defaultProps = {
	title: "Project title",
	description: "Project description",
};

ProjectCard.propTypes = {
	title: PropTypes.string,
	description: PropTypes.arrayOf(PropTypes.string),
	src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	alt: PropTypes.string,
	source: PropTypes.string,
	live: PropTypes.string,
	example: PropTypes.string,
};

export default ProjectCard;
