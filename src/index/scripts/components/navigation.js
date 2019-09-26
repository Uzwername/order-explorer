import React from "react";
import PropTypes from "prop-types";
import { NavTabsContainer } from "IndexContainers/navTabsContainer";
import { SearchBarContainer } from "IndexContainers/SearchBarContainer";
import navStyles from "IndexStyles/navigation.scss";

export const Navigation = props => (
	<>
		<nav id = { navStyles.mainNav }>
			<div className = { navStyles.searchContainer }>
				<SearchBarContainer
					handleSearch = { props.handleNavModeChange }
					handleShuffle = { props.handleShuffle }
				/>
			</div>
		</nav>
		<NavTabsContainer
			navMode = { props.navMode }
			handleNavModeChange = { props.handleNavModeChange }
			handleShuffle = { props.handleShuffle }
		/>
	</>
);

Navigation.propTypes = {
	navMode: PropTypes.number.isRequired,
	handleNavModeChange: PropTypes.func.isRequired,
	handleShuffle: PropTypes.func.isRequired,
};
