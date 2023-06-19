import React, {useState, useRef, useEffect} from "react";
import PropTypes from "prop-types";
import styles from "./ResponsiveNav.module.css";
import Button from "../Button/Button";

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

	return (
		<>
			<nav className={styles.nav} ref={navRef}>
				<div className={styles.hamburgerButton}>
					<Button style="iconButton" onClick={toggleMenu}>
						<span className="material-symbols-outlined">{menuIcon}</span>
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
