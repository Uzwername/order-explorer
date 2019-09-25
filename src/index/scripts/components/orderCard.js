import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import contentStyles from "IndexStyles/mainContent.scss";

const constructEquation = (order, result) => {

	const _result = result.toFixed(2);

	const equation = `SKU:(${order.SKU}) x ${order.Quantity} = ${_result}`;

	return equation;

};

export const OrderCard = props => (
	<Paper
		className = { contentStyles.adaptiveCard }
		/**
		* Could also be done via
		* data-* attribute. However,
		* in this case one way is not
		* a lot better than another one.
		*/
		onClick = { props.handleClick }
		data-order = { JSON.stringify(props.order) }
	>
		<Typography
			variant = "caption"
			component = "p"
			align = "center"
			classes = {{
				root: contentStyles.status,
			}}
		>
			{ props.order.Status }
		</Typography>
		<Typography
			variant = "h6"
			component = "p"
			paragraph = { true }
		>
			{ `#${props.order.OrderID}` }
		</Typography>
		{
			props.order.Items.map(
				item => (
					<Typography
						/**
						* SKU is unique inside
						* each "Card".
						*/
						key = { item.SKU }
						component = "p"
						align = "right"
					>
						{
							constructEquation(
								item,
								item.Price * item.Quantity
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
			{ `Total: € ${(props.order.Total).toFixed(2)}` }
		</Typography>
	</Paper>
);

OrderCard.propTypes = {
	order: PropTypes.object.isRequired,
	handleClick: PropTypes.func.isRequired,
};
