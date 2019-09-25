import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { OrderDialog } from "IndexComponents/orderDialog";
import contentStyles from "IndexStyles/mainContent.scss";

export const MainContent = props => {

	const constructEquation = (e, result) => {

		const _result = result.toFixed(2);

		const equation = `SKU:(${e.SKU}) x ${e.Quantity} = ${_result}`;

		return equation;

	};

	/**
	* Generates a "card"
	* for each order.
	*/
	const orderCards = props.orders.map(
		e => (
			<Paper
				key = { e.OrderID }
				className = { contentStyles.adaptiveCard }
				/**
				* Could also be done via
				* data-* attribute. However,
				* in this case one way is not
				* a lot better than another one.
				*/
				onClick = { () => props.handleRecordOpen(e) }
			>
				<Typography
					variant = "caption"
					component = "p"
					align = "center"
					classes = {{
						root: contentStyles.status,
					}}
				>
					{ e.Status }
				</Typography>
				<Typography
					variant = "h6"
					component = "p"
					paragraph = { true }
				>
					{ `#${e.OrderID}` }
				</Typography>
				{
					e.Items.map(
						innerE => (
							<Typography
								/**
								* SKU is unique inside
								* each "Card".
								*/
								key = { innerE.SKU }
								component = "p"
								align = "right"
							>
								{
									constructEquation(
										innerE,
										innerE.Price * innerE.Quantity
									)
								}
							</Typography>
						)
					)
				}
				<br/>
				<Typography
					component = "p"
					align = "right"
				>
					{ `Total: € ${(e.Total).toFixed(2)}` }
				</Typography>
			</Paper>
		)
	);

	return (
		<>
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
			<div className = { contentStyles.board }>
				{ orderCards }
			</div>
			<OrderDialog
				order = { props.order }
				handleClose = { props.handleRecordClose }
			/>
		</>
	);
};

MainContent.propTypes = {
	activeTab: PropTypes.number.isRequired,
	setActiveTab: PropTypes.func.isRequired,
	orders: PropTypes.array.isRequired,
	order: PropTypes.object.isRequired,
	handleRecordOpen: PropTypes.func.isRequired,
	handleRecordClose: PropTypes.func.isRequired,
};
