import styles from "../styles/lineTitle.module.css";
import PropTypes from "prop-types";

function LineTitle({title}) {
    return (
        <div className={styles.title}>
            <hr className={styles.hr}></hr>
            <span className={styles.titleText}>{title}</span>
            <hr className={styles.hr}></hr>
        </div>
    );
}

LineTitle.propTypes = {
    title: PropTypes.string.isRequired,
};

export default LineTitle;
