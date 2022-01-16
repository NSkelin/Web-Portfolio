import styles from "../styles/lineTitle.module.css";

export default function LineTitle({title}) {
    return (
        <div className={styles.title}>
            <hr className={styles.hr}></hr>
            <span className={styles.titleText}>{title}</span>
            <hr className={styles.hr}></hr>
        </div>
    );
}
