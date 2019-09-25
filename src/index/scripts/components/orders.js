import React from "react";
import PropTypes from "prop-types";
import contentStyles from "IndexStyles/mainContent.scss";

export const Orders = props => (

	<div className = { contentStyles.board }>
		{ props.children }
	</div>

);

Orders.propTypes = {
	children: PropTypes.array.isRequired
};
