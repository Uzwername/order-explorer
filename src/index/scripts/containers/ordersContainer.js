import React from "react";
import PropTypes from "prop-types";
import { Orders } from "IndexComponents/orders.js";

export const OrdersContainer = props => (
	<Orders>
		{ props.children }
	</Orders>
);

OrdersContainer.propTypes = {
	children: PropTypes.array.isRequired
};
