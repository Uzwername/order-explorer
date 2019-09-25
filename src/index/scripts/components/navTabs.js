import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import contentStyles from "IndexStyles/mainContent.scss";

export const NavTabs = props => (
	<div className = { contentStyles.tabContainer }>
		<Paper square>
			<Tabs
				value = { props.activeTab }
				indicatorColor = "primary"
				textColor = "primary"
				onChange = { props.setActiveTab }
				aria-label = "View mode switcher"
			>
				<Tab label = "All Orders" />
				<Tab label = "Stage View" />
			</Tabs>
		</Paper>
	</div>
);

NavTabs.propTypes = {
	activeTab: PropTypes.number.isRequired,
	setActiveTab: PropTypes.func.isRequired,
};
