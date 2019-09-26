import React from "react";
import PropTypes from "prop-types";
import { Orders } from "IndexComponents/orders.js";

export const OrdersContainer = props => {

	let grid;
	let children;

	if ( props.modality === 1 ) {

		const stageMap = new Map([
			[`Pending Confirmation`, 1],
			[`Confirmed`, 2],
			[`Sent to Warehouse`, 3],
			[`Shipped`, 4],
			[`In Transit`, 5],
			[`Delivered`, 6]
		]);

		grid = true;
		children = [];

		React.Children.forEach(
			props.children,
			child => {

				const columnNumber = stageMap.get(
					child.props.order.Status
				);

				children.push(
					React.cloneElement(
						child,
						{
							style: {
								gridColumn: columnNumber,
							}
						}
					)
				);
			}
		);

	} else {
		children = props.children;
	}

	return (
		<Orders
			grid = { grid }
		>
			{ children }
		</Orders>
	);

};

OrdersContainer.propTypes = {
	children: PropTypes.array.isRequired,
	modality: PropTypes.number,
};
