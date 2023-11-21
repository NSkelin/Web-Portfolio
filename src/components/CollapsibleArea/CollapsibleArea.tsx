import {ReactNode, useEffect, useRef, useState} from "react";
import styles from "./CollapsibleArea.module.scss";

/**
 * The height is responsive and will change to match the windows width. The values are the heights used for the corresponding window width.
 */
type ResponsiveHeight = {
	mobile: string | number;
	tablet: string | number;
	desktop: string | number;
};

/**
 * The height will always be this value and never change.
 * @example "100px", "100%", 100.
 */
type StaticHeight = string | number;

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
	/**
	 * The height to set the CollapsibleArea to when expanded.
	 *
	 * Defaults to "fitContent" which dynamically updates the height to always be large enough to fit all of the content.
	 */
	expandedHeight?: "fitContent" | StaticHeight | ResponsiveHeight;
	/**
	 * The height to set the CollapsibleArea to when collapsed.
	 */
	collapsedHeight: StaticHeight | ResponsiveHeight;
};
/**
 * An empty container that can collapse & expand to hide / show any overflowing child elements.
 *
 * For the collapse / expand transitions to work properly a specific height must be set for the collapse height and expanded height.
 * Both of these heights can be set to a static value that never changes, or an object of values used to make the height update responsively
 * to the window width. In addition, the expandedHeight can be set to "fitContent" (default) which dynamically updates the height
 * to always be large enough to fit all of the content.
 */
function CollapsibleArea({
	children,
	collapsed = true,
	fadeColor,
	expandedHeight = "fitContent",
	collapsedHeight,
}: CollapsibleAreaProps) {
	const [windowWidth, setWindowWidth] = useState(1000);
	const div = useRef<HTMLDivElement>(null);

	// Save the initial browser window width on the first load.
	useEffect(() => {
		setWindowWidth(window.innerWidth);
	}, []);

	// Keep the windowWidth state in sync with the browser window width.
	useEffect(() => {
		function handleResize() {
			setWindowWidth(window.innerWidth);
		}

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	/**
	 * Takes a value and uses it to figure out the height.
	 *
	 * @param value The value used to determine the height.
	 * 1. "fitContent": Dynamically updates the height to always be large enough to fit all of the content.
	 * 2. StaticHeight: The height will always be this value and never change (example: 100px, 100%, 100, etc).
	 * 3. ResponsiveHeight: Uses the matching height for the current window size (mobile, tablet, desktop).
	 */
	function getHeight(value: "fitContent" | StaticHeight | ResponsiveHeight) {
		// Breakpoints used to determine the current window size (mobile, tablet, desktop).
		const mobile = {maxWidth: 599};
		const tablet = {minWidth: 600, maxWidth: 904};
		const desktop = {minWidth: 905};

		// 1 "fitContent".
		if (div.current !== null && value === "fitContent") return div.current.scrollHeight;
		// 2 StaticValue.
		else if (typeof value === "string" || typeof value === "number") return value;
		// 3 Responsive.
		else if (windowWidth <= mobile.maxWidth) return value.mobile;
		else if (windowWidth >= tablet.minWidth && windowWidth <= tablet.maxWidth) return value.tablet;
		else if (windowWidth >= desktop.minWidth) return value.desktop;
		// Should not reach here.
		else throw new Error(`Invalid query: ${value}`);
	}

	const minHeight = getHeight(collapsedHeight);
	const maxHeight = getHeight(expandedHeight);

	// Creates the fade effect at the bottom of the area over to blend elements that go beyond the CollapsibleArea while collapsed.
	const foregroundGradient = `linear-gradient(rgba(${fadeColor.join(", ")}, 0), rgba(${fadeColor.join(", ")}, 1))`;

	// Update height and style based on collapsed state.
	const containerHeight = collapsed ? minHeight : maxHeight;
	const styleName = collapsed ? styles.collapsed : styles.expanded;

	return (
		<div style={{height: containerHeight}} className={styleName}>
			{/* Extra div is required so the scroll height shrinks back down when resizing the window. */}
			<div ref={div}>{children}</div>
			<div className={styles.foreground} style={{background: foregroundGradient}}></div>
		</div>
	);
}

export default CollapsibleArea;
