import Image, {ImageProps} from "next/image";
import React, {useState} from "react";
import "swiper/css";
import "swiper/css/thumbs";
import {Thumbs} from "swiper/modules";
import {Swiper, SwiperRef, SwiperSlide} from "swiper/react";
import {Swiper as SwiperTypes} from "swiper/types";
import Lightbox, {SlideImage} from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import styles from "./ProjectCardGallery.module.scss";

import NextJsImage from "../NextJsImage";

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
	/**
	 * The reference to the parent swiper instance that the gallery is nested in.
	 * Used to prevent the parent swiper from moving when the user is swiping the gallery.
	 */
	swiperRef: React.MutableRefObject<null | SwiperRef>;
}
/**
 * Renders a responsive gallery of images, for use with the ProjectCard component.
 *
 * On mobile and tablet the gallery will consist of a small carousel of images, with tablet being a bit bigger.
 * On desktop one image will be enlarged with a carousel of thumb images below for selecting the next image.
 */
function ProjectCardGallery({images, swiperRef}: ProjectCardGalleryProps) {
	// Store thumbs swiper instance.
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperTypes | null>(null);
	const [open, setOpen] = useState(false);
	const [activeSlide, setActiveSlide] = useState(0);

	/**
	 * Creates the image slide jsx elements from the prop data.
	 */
	function createImageSlides() {
		let imageSlides = [];
		let thumbSlides = [];
		for (let i = 0; i < images.length; i++) {
			const thumbClass = activeSlide === i ? styles.thumbActive : styles.thumbInactive;
			const {src, alt} = images[i];

			imageSlides.push(
				<SwiperSlide key={i} className={styles.slider}>
					<Image
						onClick={() => setOpen(true)}
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
					<div className={thumbClass}></div>
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
					touchEventsTarget={"container"}
					onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
					onTouchStart={(swiper) => {
						// Prevent parent swiper from moving when user is swiping the gallery.

						// images.length is used to check if the mobile view has enough images to need moving. If it doesn't,
						// then the parent swiper should not be prevented from moving.

						// Swiper.height is used to check if the gallery is in desktop view. If it is, then the parent swiper should not be prevented from moving.
						// Because the gallery is not swipable in desktop view, instead using thumbs to change the image.
						if (swiperRef.current == null || images.length < 3 || swiper.height > 200) return;
						swiperRef.current.swiper.allowSlideNext = false;
						swiperRef.current.swiper.allowSlidePrev = false;
					}}
					onTransitionEnd={(swiper) => {
						// Allow parent swiper to move when user is not swiping the gallery and the gallery is not still transitioning.
						if (swiperRef.current == null || images.length < 3 || swiper.height > 200) return;
						swiperRef.current.swiper.allowSlideNext = true;
						swiperRef.current.swiper.allowSlidePrev = true;
					}}
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
					touchEventsTarget={"container"}
				>
					{thumbSlides}
				</Swiper>
			</div>
			<Lightbox
				open={open}
				close={() => setOpen(false)}
				slides={images.map(({src}) => src as SlideImage)}
				render={{slide: NextJsImage}}
			/>
		</div>
	);
}

export default ProjectCardGallery;
