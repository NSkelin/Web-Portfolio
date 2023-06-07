import React, {MouseEventHandler, ReactNode} from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
	children?: ReactNode;
	style: ButtonStyles;
	onClick: MouseEventHandler<HTMLButtonElement>;
};
type ButtonStyles = "fab" | "filled" | "outlined";
function Button({children, style, onClick}: ButtonProps) {
	return (
		<button onClick={onClick} className={styles[style]}>
			{children}
			<div className={styles.stateLayer}></div>
		</button>
	);
}

export default Button;
