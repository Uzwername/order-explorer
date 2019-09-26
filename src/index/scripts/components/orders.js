import React from "react";
import PropTypes from "prop-types";
import contentStyles from "IndexStyles/mainContent.scss";

export const Orders = props => {

	const className = props.grid ?
		contentStyles.gridBoard :
		contentStyles.flexBoard;

	return (
		<div className = { className }>
			{ props.children }
		</div>
	);

};

Orders.propTypes = {
	children: PropTypes.array.isRequired,
	grid: PropTypes.bool,
};
