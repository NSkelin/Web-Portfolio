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
};
/**
 * A container that will hide any overflowing elements inside when collapsed, or show all elements when expanded. Expansion height is automatically determined by content height.
 */
function CollapsibleArea({children, collapsed = true}: CollapsibleAreaProps) {
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

	return (
		<div style={{height: collapsed ? "" : scrollHeight}} className={collapsed ? styles.collapsed : styles.expanded}>
			<div ref={div}>{children}</div>
			<div className={styles.foreground}></div>
		</div>
	);
}

export default CollapsibleArea;
