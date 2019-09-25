import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import mainContentStyles from "IndexStyles/mainContent.scss";
import PropTypes from "prop-types";

export const MainContent = props => {

	/**
	* Generates a "card"
	* for each order.
	*/
	const orderCards = props.orders.map(
		e => (
			<Paper
				key = { e.OrderID }
				className = { mainContentStyles.adaptivePaper }
			>
				<Typography
					variant = "h6"
					component = "p"
				>
					{ `#${e.OrderID}` }
				</Typography>
				<Typography
					variant = "p"
					component = "p"
				>
					{ e.Total }
				</Typography>
			</Paper>
		)
	);

	return (
		<>
			<div className = { mainContentStyles.tabContainer }>
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
			<div className = { mainContentStyles.board }>
				{ orderCards }
			</div>
		</>
	);
};

MainContent.propTypes = {
	activeTab: PropTypes.number.isRequired,
	setActiveTab: PropTypes.func.isRequired,
	orders: PropTypes.array.isRequired,
};
