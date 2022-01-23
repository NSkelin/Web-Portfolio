import Image from "next/image";
import styles from "../styles/hyperLink.module.css";
import PropTypes from "prop-types";

function HyperLink({text = "link", icon: {source, height = 35, alt = "icon", width = 35}, href}) {
	return (
		<div className={styles.container}>
			<a className={styles.link} href={href}>
				{source && <Image src={source} width={width} height={height} alt={alt} />}
				<span className={styles.text}>{text}</span>
			</a>
		</div>
	);
}

HyperLink.propTypes = {
	text: PropTypes.string,
	href: PropTypes.string.isRequired,
	icon: PropTypes.shape({
		source: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		height: PropTypes.number,
		width: PropTypes.number,
		alt: PropTypes.string,
	}),
};

export default HyperLink;
