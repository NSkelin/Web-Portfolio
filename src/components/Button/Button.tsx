import React from "react";
import styles from "./Button.module.scss";

/**
 * Pre-made styles that loosely follow googles material design.
 */
export type ButtonStyles = "fab" | "filled" | "outlined" | "iconButton" | "text";

interface ButtonProps
	extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
		React.AriaAttributes {
	/**
	 * Controls which style the button will use.
	 */
	buttonStyle: ButtonStyles;
}

/**
 * A custom button loosely following googles material design docs.
 * Its the default HTML button element with an included "state layer" div for styling purposes.
 */
function Button({children, buttonStyle, ...rest}: ButtonProps) {
	return (
		<button {...rest} className={styles[buttonStyle]}>
			<div className={styles.stateLayer}>{children}</div>
		</button>
	);
}

export default Button;
