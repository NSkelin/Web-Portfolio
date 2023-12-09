import {Menu, MenuOpen} from "public/icons";
import React, {useEffect, useRef, useState} from "react";
import {useSwiper} from "swiper/react";
import Button from "../Button";
import styles from "./ResponsiveNav.module.scss";

/**
 * Icons for the different states of the navigation menu.
 */
const navIcons = {
	expanded: <MenuOpen className={styles.materialSymbol} />,
	collapsed: <Menu className={styles.materialSymbol} />,
};

interface ResponsiveNavProps {
	children: React.ReactNode;
}
/**
 * Renders a navigation menu that changes depending on the screen width.
 *
 * With small screens (phone / tablet) the navigation is a dropdown menu with a hamburger button.
 * On large screens (desktop) the navigation is a horizontal bar.
 */
function ResponsiveNav({children}: ResponsiveNavProps) {
	const [menuState, setMenuState] = useState<"collapsed" | "expanded">("collapsed");
	const navRef = useRef<HTMLElement>(null);
	const swiper = useSwiper();

	// Close navigation menu.
	function collapseMenu(event: MouseEvent | TouchEvent | PointerEvent) {
		if (navRef.current && !navRef.current.contains(event.target as Node)) {
			if (menuState === "expanded") {
				setMenuState("collapsed");
			}
		}
	}

	// Close navigation menu when the user clicks inside the swiper instance.
	// Swiper blocks the click event from propagating to the document to make the swipe work smoothly.
	swiper.on("touchStart", (swiper, event) => {
		collapseMenu(event);
	});

	// Collapses the navigation menu when the user clicks / taps outside the specified area.
	useEffect(() => {
		// Bind the event listener.
		document.addEventListener("mousedown", collapseMenu);
		return () => {
			// Unbind the event listener on clean up.
			document.removeEventListener("mousedown", collapseMenu);
		};
	});

	/**
	 * Toggles the navigation menu between expanded / collapsed.
	 */
	function toggleMenu() {
		setMenuState(menuState === "collapsed" ? "expanded" : "collapsed");
	}

	const display = menuState === "collapsed" ? "none" : "flex";

	return (
		<nav className={styles.nav} ref={navRef}>
			<div className={styles.hamburgerButton}>
				<Button buttonStyle="iconButton" onClick={toggleMenu}>
					{navIcons[menuState]}
				</Button>
			</div>
			<div className={styles.navList} style={{display: display}}>
				{children}
			</div>
		</nav>
	);
}

export default ResponsiveNav;
