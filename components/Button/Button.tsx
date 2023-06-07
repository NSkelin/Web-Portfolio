import React, {ReactNode} from "react";
import styles from "./Button.module.scss";

type ButtonStyles = "fab" | "filled" | "outlined";
function Button({children, style, onClick}: {children?: ReactNode; style: ButtonStyles; onClick: any}) {
	return (
		<button onClick={onClick} className={styles[style]}>
			{children}
			<div className={styles.stateLayer}></div>
		</button>
	);
}

export default Button;
