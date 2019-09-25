import React from "react";
import { Navigation } from "IndexComponents/navigation";

export const NavigationContainer = () => {

	/**
	* Possible modes:
	* 0: All orders Tab
	* 1: Stage View
	* 2: Global Search Mode
	*/
	const [navMode, setNavMode] = React.useState(0);

	return (
		<Navigation
			navMode = { navMode }
			handleNavModeChange = { setNavMode }
		/>
	);

};
