import React from "react";
import PropTypes from "prop-types";
import { NavTabs } from "IndexComponents/navTabs";

export const NavTabsContainer = props => {

	const [activeTab, setActiveTab] = React.useState(0);

	const deactivated = (props.navMode > 1);

	const handleTabChange = (event, newActiveTab) => setActiveTab(newActiveTab);

	const handleNavModeChange = () => props.handleNavModeChange(0);

	return (
		<NavTabs
			activeTab = { activeTab }
			setActiveTab = { handleTabChange }
			deactivated = { deactivated }
			handleNavModeChange = { handleNavModeChange }
		/>
	);

};

NavTabsContainer.propTypes = {
	navMode: PropTypes.number.isRequired,
	handleNavModeChange: PropTypes.func.isRequired,
};
