import Image, {ImageProps} from "next/image";
import React from "react";
import styles from "./ProjectCardGallery.module.scss";

export interface ProjectCardGalleryProps {
	/**
	 * The source for the project display image.
	 */
	imageSrc: ImageProps["src"];
	/**
	 * The alt property for the project display image.
	 */
	imageAlt: ImageProps["alt"];
}
/**
 * Renders a single image, for use with the ProjectCard component
 */
function ProjectCardGallery({imageSrc, imageAlt}: ProjectCardGalleryProps) {
	return (
		<div className={styles.imageWrapper}>
			<Image className={styles.image} src={imageSrc} fill={true} alt={imageAlt} />
		</div>
	);
}

export default ProjectCardGallery;
