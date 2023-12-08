import Image, {ImageProps} from "next/image";
import React, {useRef, useState} from "react";
import "swiper/css";
import "swiper/css/thumbs";
import {Thumbs} from "swiper/modules";
import {Swiper, SwiperRef, SwiperSlide} from "swiper/react";
import {SwiperOptions, Swiper as SwiperTypes} from "swiper/types";
import Lightbox, {SlideImage, ViewCallbackProps} from "yet-another-react-lightbox";
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
	const imageSwiper = useRef<SwiperRef | null>(null);

	/**
	 * Slides the image swiper gallery to the given index.
	 *
	 * @param index The index to slide the gallery to.
	 */
	function slideGalleryTo(index: number) {
		if (imageSwiper.current != null && imageSwiper.current.swiper != null) {
			imageSwiper.current.swiper.slideTo(index);
		}
	}

	/**
	 * Updates the rest of the gallery to match the slide the lightbox is on.
	 *
	 * @param index The index of the slide the user has swiped to.
	 */
	function handleLightboxSlideChange({index}: ViewCallbackProps) {
		setActiveSlide(index);
		slideGalleryTo(index);
	}

	/**
	 * Opens the lightbox to the clicked image.
	 *
	 * @param imageIndex The index of the slide containing the image to open in the lightbox.
	 */
	function handleImageClick(imageIndex: number) {
		setOpen(true);
		setActiveSlide(imageIndex);
	}

	/**
	 * Updates the rest of the gallery to match the slide of the clicked thumb.
	 *
	 * @param swiper The swiper instance that was clicked.
	 */
	function handleThumbClick(swiper: SwiperTypes) {
		const index = swiper.slides.indexOf(swiper.clickedSlide);
		setActiveSlide(index);
	}

	/**
	 * When the breakpoint changes, if the gallery is in desktop view, slide the gallery to the active slide.
	 *
	 * This is necessary because swiper (with slidesPerView="auto") sets the active slide as the left most viewable slide.
	 * So if the active slide in state is set to one of those last images and the breakpoint changes to desktop, the main slide will be out of sync.
	 *
	 * @param swiper The swiper instance.
	 * @param breakpoint The breakpoint that was changed to.
	 */
	function handleBreakpointChange(swiper: SwiperTypes, breakpoint: SwiperOptions) {
		if (breakpoint.slidesPerView === 1) {
			// This timeout is necessary or else the slide will not change.
			// I tried as low as 0.1 and it still worked but i set it to 10 just incase the user lags or something.
			setTimeout(() => {
				slideGalleryTo(activeSlide);
			}, 10);
		}
	}

	/**
	 * Prevents the parent swiper from changing slides if the gallery can slide (slide overflow).
	 *
	 * This is necessary to stop the parent slider from sliding with the gallery.
	 *
	 * @param swiper - The child swiper instance.
	 */
	function preventParentSwiperMovement(swiper: SwiperTypes) {
		if (swiperRef.current?.swiper == null) return;
		// Dont prevent parent swiper from moving if the gallery is too small to move (no overflow).
		else if (swiper.isBeginning && swiper.isEnd) return;
		// Swiper not allowed to move so dont block parent swiper.
		else if (!swiper.allowTouchMove) return;

		swiperRef.current.swiper.allowSlideNext = false;
		swiperRef.current.swiper.allowSlidePrev = false;
	}

	/**
	 * Allows the parent swiper to change slides.
	 */
	function allowParentSwiperMovement() {
		// Allow parent swiper to move when user is not swiping the gallery and the gallery is not still transitioning.
		if (swiperRef.current?.swiper == null) return;
		swiperRef.current.swiper.allowSlideNext = true;
		swiperRef.current.swiper.allowSlidePrev = true;
	}

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
						onClick={() => handleImageClick(i)}
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
					<div className={styles.thumbContainer}>
						<div className={thumbClass}></div>
						<Image className={styles.thumb} src={src} alt={alt} sizes="136px" />
					</div>
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
					ref={imageSwiper}
					nested={true}
					spaceBetween={10}
					slidesPerView={"auto"}
					breakpoints={{905: {slidesPerView: 1, spaceBetween: 0, allowTouchMove: false}}}
					modules={[Thumbs]}
					thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
					touchEventsTarget={"container"}
					onBreakpoint={handleBreakpointChange}
					onTouchStart={preventParentSwiperMovement}
					onTransitionEnd={allowParentSwiperMovement} // Keeps the parent still if the user swipes and lets go.
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
					onClick={handleThumbClick}
					onTouchStart={preventParentSwiperMovement}
					onTransitionEnd={allowParentSwiperMovement} // Keeps the parent still if the user swipes and lets go.
				>
					{thumbSlides}
				</Swiper>
			</div>
			<Lightbox
				index={activeSlide}
				on={{view: handleLightboxSlideChange}}
				open={open}
				close={() => setOpen(false)}
				slides={images.map(({src}) => src as SlideImage)}
				render={{slide: NextJsImage}}
			/>
		</div>
	);
}

export default ProjectCardGallery;
