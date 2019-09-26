import React from "react";
import PropTypes from "prop-types";
import { Navigation } from "IndexComponents/navigation";

export const NavigationContainer = props => {

	return (
		<Navigation
			navMode = { props.navMode }
			handleNavModeChange = { props.setNavMode }
			handleShuffle = { props.handleShuffle }
		/>
	);

};

NavigationContainer.propTypes = {
	navMode: PropTypes.number.isRequired,
	setNavMode: PropTypes.func.isRequired,
	handleShuffle: PropTypes.func.isRequired,
};
