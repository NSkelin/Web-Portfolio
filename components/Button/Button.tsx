import React from "react";
import styles from "./Button.module.scss";

/** Pre-made styles that loosely follow googles material design. */
type ButtonStyles = "fab" | "filled" | "outlined" | "iconButton";

interface ButtonProps
	extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
		React.AriaAttributes {
	/** Control which style the button will use. */
	buttonStyle: ButtonStyles;
}

/**
 * A custom button loosely following googles material design docs.
 * Its the default HTML button element with an included "state layer" div for styling purposes.
 */
function Button({children, buttonStyle, ...rest}: ButtonProps) {
	return (
		<button {...rest} className={styles[buttonStyle]}>
			{children}
			<div className={styles.stateLayer}></div>
		</button>
	);
}

export default Button;
