import Image, {ImageProps} from "next/image";
import React from "react";
import styles from "./ProjectSlideGallery.module.scss";

export interface ProjectSlideGalleryProps {
	/**
	 * The source for the project display image.
	 */
	imageSrc: ImageProps["src"];
	/**
	 * The alt property for the project display image.
	 */
	imageAlt: ImageProps["alt"];
}
function ProjectSlideGallery({imageSrc, imageAlt}: ProjectSlideGalleryProps) {
	return (
		<div className={styles.imageWrapper}>
			<Image className={styles.image} src={imageSrc} fill={true} alt={imageAlt} />
		</div>
	);
}

export default ProjectSlideGallery;
