import {ReactNode, useEffect, useRef, useState} from "react";
import styles from "./CollapsibleArea.module.scss";

export type CollapsibleAreaProps = {
	/**
	 * The children to be rendered inside the area. When collapsed, the overflowing children will be hidden. React children prop - lowercase "c".
	 */
	children?: ReactNode;
	/**
	 * Controls whether the area should be collapsed or expanded.
	 */
	collapsed?: boolean;
	/**
	 * Sets the color for the fade effect at the bottom of the collapsible area. The effect is used to blend elements
	 * that extend past the collapsible area's height when it is collapsed. The three numbers are for RGB, so [R, G, B]
	 * with each number being 0-255.
	 */
	fadeColor: [number, number, number];
};
/**
 * A container that will hide any overflowing elements inside when collapsed, or show all elements when expanded. Expansion height is automatically determined by content height.
 */
function CollapsibleArea({children, collapsed = true, fadeColor}: CollapsibleAreaProps) {
	const div = useRef<HTMLDivElement>(null);
	const [scrollHeight, setScrollHeight] = useState<string | number>(445);

	/**
	 * Set initial scroll height.
	 */
	useEffect(() => {
		if (div.current !== null) {
			setScrollHeight(div.current.scrollHeight);
		}
	}, []);

	/**
	 * Update scroll height when the window resizes.
	 */
	useEffect(() => {
		function handleResize() {
			if (div.current !== null) {
				setScrollHeight(div.current.scrollHeight);
			}
		}

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	// Creates the fade effect at the bottom of the area over to blend elements that go beyond the collapsible area.
	const foregroundGradient = `linear-gradient(rgba(${fadeColor.join(", ")}, 0), rgba(${fadeColor.join(", ")}, 1))`;

	return (
		<div style={{height: collapsed ? "" : scrollHeight}} className={collapsed ? styles.collapsed : styles.expanded}>
			<div ref={div}>{children}</div>
			<div className={styles.foreground} style={{background: foregroundGradient}}></div>
		</div>
	);
}

export default CollapsibleArea;
