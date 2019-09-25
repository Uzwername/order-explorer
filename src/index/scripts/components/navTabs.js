import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import contentStyles from "IndexStyles/mainContent.scss";

export const NavTabs = props => {

	const content = !props.deactivated ?
		(
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
		) : (
			<Button
				variant = "contained"
				onClick = { props.handleNavModeChange }
			>
				Back to overview
			</Button>
		);

	return (
		<div className = { contentStyles.tabContainer }>
			{ content }
		</div>
	);

};

NavTabs.propTypes = {
	activeTab: PropTypes.number.isRequired,
	setActiveTab: PropTypes.func.isRequired,
	deactivated: PropTypes.bool,
	handleNavModeChange: PropTypes.func.isRequired,
};
