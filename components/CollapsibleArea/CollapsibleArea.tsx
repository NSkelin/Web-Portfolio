import React, {ReactNode} from "react";
import styles from "./CollapsibleArea.module.scss";

function CollapsibleArea({children, collapsed = false}: {children?: ReactNode; collapsed?: boolean}) {
	return (
		<div className={collapsed ? styles.collapsed : styles.expanded}>
			<div className={styles.foreground}></div>
			{children}
		</div>
	);
}

export default CollapsibleArea;
