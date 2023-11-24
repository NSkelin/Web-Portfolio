import Image, {ImageProps} from "next/image";
import React, {useState} from "react";
import "swiper/css";
import "swiper/css/thumbs";
import {Thumbs} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import {Swiper as SwiperTypes} from "swiper/types";
import styles from "./ProjectCardGallery.module.scss";

export interface ProjectCardGalleryProps {
	/**
	 * The images to display inside the gallery. Use an aspect ratio of 4:3 for best results.
	 */
	images: {
		/**
		 * The source for the project display image.
		 */
		src: ImageProps["src"];
		/**
		 * The alt property for the project display image.
		 */
		alt: ImageProps["alt"];
	}[];
}
/**
 * Renders a responsive gallery of images, for use with the ProjectCard component.
 *
 * On mobile and tablet the gallery will consist of a small carousel of images, with tablet being a bit bigger.
 * On desktop one image will be enlarged with a carousel of thumb images below for selecting the next image.
 */
function ProjectCardGallery({images}: ProjectCardGalleryProps) {
	// Store thumbs swiper instance.
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperTypes | null>(null);

	/**
	 * Creates the image slide jsx elements from the prop data.
	 */
	function createImageSlides() {
		let imageSlides = [];
		let thumbSlides = [];
		for (let i = 0; i < images.length; i++) {
			const {src, alt} = images[i];

			imageSlides.push(
				<SwiperSlide key={i} className={styles.slider}>
					<Image
						className={styles.image}
						src={src}
						alt={alt}
						sizes="
					(min-width: 905px) 524px,
					(min-width: 600px) and (max-width: 904px) 220px,
					136px"
					/>
				</SwiperSlide>,
			);
			thumbSlides.push(
				<SwiperSlide key={i} className={styles.slider}>
					<Image className={styles.thumb} src={src} alt={alt} sizes="136px" />
				</SwiperSlide>,
			);
		}

		return {imageSlides, thumbSlides};
	}

	const {imageSlides, thumbSlides} = createImageSlides();

	return (
		<div className={styles.gallery}>
			<div className={styles.imageDisplay}>
				<Swiper
					nested={true}
					spaceBetween={10}
					slidesPerView={"auto"}
					breakpoints={{905: {slidesPerView: 1, spaceBetween: 0, allowTouchMove: false}}}
					modules={[Thumbs]}
					thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
					loop={true}
					touchEventsTarget={"container"}
				>
					{imageSlides}
				</Swiper>
			</div>

			<div className={styles.thumbDisplay}>
				<Swiper
					nested={true}
					spaceBetween={10}
					slidesPerView={"auto"}
					modules={[Thumbs]}
					watchSlidesProgress
					onSwiper={setThumbsSwiper}
					loop={true}
					touchEventsTarget={"container"}
				>
					{thumbSlides}
				</Swiper>
			</div>
		</div>
	);
}

export default ProjectCardGallery;
