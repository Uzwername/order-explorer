import React from "react";
import { Navigation } from "IndexComponents/navigation";

export const NavigationContainer = () => {

	/**
	* Possible modes:
	* 0: All orders Tab
	* 1: Stage View
	* 2: Global Mode
	*/
	const [navMode, setNavMode] = React.useState(0);

	const handleNavModeChange = (event, newActiveTab) => setNavMode(newActiveTab);

	return (
		<Navigation
			navMode = { navMode }
			handleNavModeChange = { handleNavModeChange }
		/>
	);

};
