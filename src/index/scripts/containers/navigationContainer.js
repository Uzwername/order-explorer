import React from "react";
import PropTypes from "prop-types";
import { Navigation } from "IndexComponents/navigation";

export const NavigationContainer = props => {

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
			handleShuffle = { props.handleShuffle }
		/>
	);

};

NavigationContainer.propTypes = {
	handleShuffle: PropTypes.func.isRequired,
};
