import React, {MouseEventHandler, ReactNode} from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
	/**
	 * The children to be rendered inside the button, such as text and icons. React children prop - lowercase "c".
	 */
	children?: ReactNode;
	/**
	 * Control which style the button will use.
	 */
	style: ButtonStyles;
	/**
	 * A function to handle the button onClick event firing
	 */
	onClick: MouseEventHandler<HTMLButtonElement>;
};

type ButtonStyles = "fab" | "filled" | "outlined" | "iconButton";

/**
 * A custom button loosely following googles material design docs.
 * Its the default HTML button element with an included "state layer" div for styling purposes.
 */
function Button({children, style, onClick}: ButtonProps) {
	return (
		<button onClick={onClick} className={styles[style]}>
			{children}
			<div className={styles.stateLayer}></div>
		</button>
	);
}

export default Button;
