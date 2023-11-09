import React, {useEffect, useRef, useState} from "react";
import {Menu, MenuOpen} from "../../public/icons";
import Button from "../Button/Button";
import styles from "./ResponsiveNav.module.css";

/**
 * Icons for the different states of the navigation menu.
 */
const navIcons = {
	expanded: <MenuOpen className={styles.materialSymbol} />,
	collapsed: <Menu className={styles.materialSymbol} />,
};

interface ResponsiveNavProps {
	/** The elements to display inside the navigation menu. */
	links: React.JSX.Element[];
}
/**
 * Renders a navigation menu that changes depending on the screen width.
 *
 * With small screens (phone / tablet) the navigation is a dropdown menu with a hamburger button.
 * On large screens (desktop) the navigation is a horizontal bar.
 */
function ResponsiveNav({links}: ResponsiveNavProps) {
	const [menuState, setMenuState] = useState<"collapsed" | "expanded">("collapsed");
	const [navDisplay, setNavDisplay] = useState("none");
	const navRef = useRef<HTMLElement>(null);

	// Collapses the navigation menu when the user clicks / taps outside the specified area.
	useEffect(() => {
		// Close navigation menu.
		function handleClickOutside(event: MouseEvent) {
			if (navRef.current && !navRef.current.contains(event.target as Node)) {
				if (menuState === "expanded") {
					setMenuState("collapsed");
					setNavDisplay("none");
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
		setNavDisplay(navDisplay === "none" ? "flex" : "none");
	}

	// Create the list of items inside the navigation menu.
	const list = links.map((link, index) => {
		return link === null ? null : (
			<li key={index} className={styles.navItem}>
				{link}
			</li>
		);
	});

	return (
		<nav className={styles.nav} ref={navRef}>
			<div className={styles.hamburgerButton}>
				<Button style="iconButton" onClick={toggleMenu}>
					{navIcons[menuState]}
				</Button>
			</div>
			<ul className={styles.navList} style={{display: navDisplay}}>
				{list}
			</ul>
		</nav>
	);
}

export default ResponsiveNav;
