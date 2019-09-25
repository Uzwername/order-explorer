import React from "react";
import PropTypes from "prop-types";
import { SearchBar } from "IndexComponents/searchBar";
import { NavTabsContainer } from "IndexContainers/navTabsContainer";
import navStyles from "IndexStyles/navigation.scss";

export const Navigation = props => (
	<nav id = { navStyles.mainNav }>
		<div className = { navStyles.searchContainer }>
			<SearchBar />
			{
				// Renders tabs until we're in search mode
				(props.navMode < 2) &&
				<NavTabsContainer
					activeTab = { props.navMode }
					handleTabChange = { props.handleNavModeChange }
				/>
			}
		</div>
	</nav>
);

Navigation.propTypes = {
	navMode: PropTypes.number.isRequired,
	handleNavModeChange: PropTypes.func.isRequired,
};
