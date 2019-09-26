import React from "react";
import PropTypes from "prop-types";
import { NavTabs } from "IndexComponents/navTabs";

export const NavTabsContainer = props => {

	const deactivated = (props.navMode > 1);

	const handleTabChange = (event, newActiveTab) =>
		props.handleNavModeChange(newActiveTab);

	const handleNavModeRestore = () => {

		// Restores tabs
		props.handleNavModeChange(0);

		// Restores all cards
		props.handleShuffle(
			() => true
		);

	};

	return (
		<NavTabs
			activeTab = { props.navMode }
			setActiveTab = { handleTabChange }
			deactivated = { deactivated }
			handleNavModeRestore = { handleNavModeRestore }
		/>
	);

};

NavTabsContainer.propTypes = {
	navMode: PropTypes.number.isRequired,
	handleNavModeChange: PropTypes.func.isRequired,
	handleShuffle: PropTypes.func.isRequired,
};
