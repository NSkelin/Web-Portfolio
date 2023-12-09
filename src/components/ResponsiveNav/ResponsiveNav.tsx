import {Menu, MenuOpen} from "public/icons";
import React, {useEffect, useRef, useState} from "react";
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

	// Collapses the navigation menu when the user clicks / taps outside the specified area.
	useEffect(() => {
		// Close navigation menu.
		function handleClickOutside(event: MouseEvent) {
			if (navRef.current && !navRef.current.contains(event.target as Node)) {
				if (menuState === "expanded") {
					setMenuState("collapsed");
				}
			}
		}
		// Bind the event listener.
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			// Unbind the event listener on clean up.
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [menuState]);

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
