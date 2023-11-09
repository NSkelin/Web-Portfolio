import React, {useEffect, useRef, useState} from "react";
import {Menu, MenuOpen} from "../../public/icons";
import Button from "../Button/Button";
import styles from "./ResponsiveNav.module.css";

function ResponsiveNav({links}) {
	const [menuIcon, setMenuIcon] = useState("menu");
	const [navDisplay, setNavDisplay] = useState("none");
	const navRef = useRef(null);

	// changes the menu icon to closed when a click happens outside of the nav element
	useEffect(() => {
		function handleClickOutside(event) {
			if (navRef.current && !navRef.current.contains(event.target)) {
				if (menuIcon != "menu") {
					setMenuIcon("menu");
					setNavDisplay("none");
				}
			}
		}
		// Bind the event listener
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [menuIcon]);

	function toggleMenu() {
		setMenuIcon(menuIcon === "menu" ? "menu_open" : "menu");
		setNavDisplay(navDisplay === "none" ? "flex" : "none");
	}

	const list = links.map((link, index) => {
		return link === null ? null : (
			<li key={index} className={styles.navItem}>
				{link}
			</li>
		);
	});

	const icon =
		menuIcon === "menu" ? <Menu className={styles.materialSymbol} /> : <MenuOpen className={styles.materialSymbol} />;

	return (
		<>
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
		</>
	);
}

ResponsiveNav.defaultProps = {
	links: [],
};

ResponsiveNav.propTypes = {
	links: PropTypes.array,
};

export default ResponsiveNav;