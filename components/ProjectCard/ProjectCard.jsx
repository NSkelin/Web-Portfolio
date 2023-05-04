import React from "react";
import PropTypes from "prop-types";
import styles from "./ProjectCard.module.css";
import Image from "next/image";
import Link from "next/link";
import GithubIcon from "../../public/github-mark-white.svg";

function ProjectCard({title, description, src, alt, width, height, source, live, example, skillIcons}) {
	const github = source ? (
		<Link className={styles.navItemGithub} href={source}>
			Github
			<GithubIcon />
		</Link>
	) : null;
	const view = live ? (
		<Link className={styles.navItem} href={live}>
			View<span className="material-symbols-outlined">open_in_new</span>
		</Link>
	) : null;
	const demo = example ? (
		<Link className={styles.navItem} href={example}>
			Demo<span className="material-symbols-outlined">open_in_new</span>
		</Link>
	) : null;

	const skills = skillIcons.map((source, index) => (
		<li key={index}>
			<Image src={source} width={48} height={48} alt={"skill image"} />
		</li>
	));

	return (
		<article className={styles.projectCard}>
			<header className={styles.header}>
				<h3>{title}</h3>
				<nav className={styles.nav}>
					{github} {view} {demo}
				</nav>
			</header>
			<div className={styles.content}>
				<div className={styles.details}>
					<p className={styles.descriptionBox}>{description}</p>
					<aside className={styles.aside}>
						<h4 className={styles.title}>Project Technologies</h4>
						<div className={styles.line}></div>
						<ul className={styles.icons}>{skills}</ul>
					</aside>
				</div>
				<div className={styles.imageWrapper}>
					<Image src={src} width={width} height={height} alt={alt} />
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
	description: PropTypes.string,
	src: PropTypes.string,
	alt: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number,
	source: PropTypes.string,
	live: PropTypes.string,
	example: PropTypes.string,
};

export default ProjectCard;
