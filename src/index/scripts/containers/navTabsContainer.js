import React from "react";
import PropTypes from "prop-types";
import { NavTabs } from "IndexComponents/navTabs";

export const NavTabsContainer = props => (
	<NavTabs
		activeTab = { props.activeTab }
		setActiveTab = { props.handleTabChange }
	/>
);

NavTabsContainer.propTypes = {
	activeTab: PropTypes.number.isRequired,
	handleTabChange: PropTypes.func.isRequired,
};
