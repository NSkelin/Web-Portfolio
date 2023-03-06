import styles from "../styles/cardHolder.module.css";
import SkillCard from "../components/skillCard.jsx";
import LinkCard from "../components/linkCard.jsx";
import PropTypes from "prop-types";
import {Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
// eslint-disable-next-line import/no-unresolved
import "swiper/css";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/navigation";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/pagination";

function cardHolder({title, cards, style}) {
	const cardElements = cards.map(({cardType, title, imageSource, array}, index) => {
		if (cardType === "skill") {
			return (
				<SwiperSlide key={index}>
					<SkillCard icon={imageSource} title={title} skills={array} />
				</SwiperSlide>
			);
		} else if (cardType === "link") {
			return (
				<SwiperSlide key={title}>
					<LinkCard backgroundImage={imageSource} title={title} links={array} />
				</SwiperSlide>
			);
		}
	});

	if (style.direction === "left") {
		return (
			<div className={styles.cardSection}>
				<div style={{backgroundColor: style.color}} className={styles.cardExtensionLeft}></div>
				<div style={{borderRadius: "0px 20px 20px 0px", backgroundColor: style.color}} className={styles.cardHolder}>
					<h1 className={styles.title}>{title}</h1>
					<div className={styles.cards}>
						<Swiper
							modules={[Pagination]}
							className={styles.mySwiper}
							pagination={{clickable: true}}
							spaceBetween={50}
							slidesPerView={1}
							breakpoints={{
								430: {
									slidesPerView: 3,
									spaceBetween: 0,
								},
							}}
						>
							{cardElements}
						</Swiper>
					</div>
				</div>
				<div className={styles.cardExtension}></div>
			</div>
		);
	} else if (style.direction === "right") {
		return (
			<div className={styles.cardSection}>
				<div className={styles.cardExtension}></div>
				<div style={{borderRadius: "20px 0px 0px 20px", backgroundColor: style.color}} className={styles.cardHolder}>
					<span className={styles.title}>{title}</span>
					<Swiper
						modules={[Navigation]}
						className={styles.mySwiper2}
						navigation
						spaceBetween={50}
						slidesPerView={1}
						breakpoints={{
							430: {
								slidesPerView: 2,
								spaceBetween: 0,
							},
							960: {
								slidesPerView: 3,
								spaceBetween: 0,
							},
						}}
					>
						{cardElements}
					</Swiper>
				</div>
				<div style={{backgroundColor: style.color}} className={styles.cardExtensionRight}></div>
			</div>
		);
	}
}

cardHolder.propTypes = {
	title: PropTypes.string,
	cards: PropTypes.arrayOf(
		PropTypes.shape({
			cardType: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			imageSource: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
			array: PropTypes.array.isRequired,
		}).isRequired
	).isRequired,
	style: PropTypes.shape({direction: PropTypes.string.isRequired, color: PropTypes.string.isRequired}).isRequired,
};

export default cardHolder;
