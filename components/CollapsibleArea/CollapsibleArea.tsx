import {ReactNode, useEffect, useRef, useState} from "react";
import styles from "./CollapsibleArea.module.scss";

function CollapsibleArea({children, collapsed = true}: {children?: ReactNode; collapsed?: boolean}) {
	const div = useRef<HTMLDivElement>(null);
	const [scrollHeight, setScrollHeight] = useState<string | number>(445);

	// set initial scroll height
	useEffect(() => {
		if (div.current !== null) {
			setScrollHeight(div.current.scrollHeight);
		}
	}, []);

	// update scroll height when the window resizes
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
