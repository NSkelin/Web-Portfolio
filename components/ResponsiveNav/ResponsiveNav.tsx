import React, {useEffect, useRef, useState} from "react";
import {Menu, MenuOpen} from "../../public/icons";
import Button from "../Button/Button";
import styles from "./ResponsiveNav.module.css";

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
	const [menuIcon, setMenuIcon] = useState("menu");
	const [navDisplay, setNavDisplay] = useState("none");
	const navRef = useRef<HTMLElement>(null);

	// Collapses the navigation menu when the user clicks / taps outside the specified area.
	useEffect(() => {
		// Close navigation menu.
		function handleClickOutside(event: MouseEvent) {
			if (navRef.current && !navRef.current.contains(event.target as Node)) {
				if (menuIcon != "menu") {
					setMenuIcon("menu");
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
	}, [menuIcon]);

	/**
	 * Toggles the navigation menu between expanded / collapsed.
	 */
	function toggleMenu() {
		setMenuIcon(menuIcon === "menu" ? "menu_open" : "menu");
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

	// Sets the nav button icon based on the navs state (expanded / collapsed).
	const icon =
		menuIcon === "menu" ? <Menu className={styles.materialSymbol} /> : <MenuOpen className={styles.materialSymbol} />;

	return (
		<nav className={styles.nav} ref={navRef}>
			<div className={styles.hamburgerButton}>
				<Button style="iconButton" onClick={toggleMenu}>
					{icon}
				</Button>
			</div>
			<ul className={styles.navList} style={{display: navDisplay}}>
				{list}
			</ul>
		</nav>
	);
}

export default ResponsiveNav;
