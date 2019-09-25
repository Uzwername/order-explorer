import React from "react";
import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import contentStyles from "IndexStyles/mainContent.scss";

export const OrderDialog = props => {

	const open = (Object.values(props.order).length === 0) ?
		false :
		true;

	return (
		<Dialog
			open = { open }
			onClose = { props.handleClose }
			className = { contentStyles.dialogWindow }
			aria-labelledby = "dialogTitle"
		>
			<DialogTitle
				className = {contentStyles.dialogTitle}
			>
				Order Details
			</DialogTitle>
			<pre
				className = {contentStyles.prettyJSON}
			>
				{
					//Pretty-prints JSON
					JSON.stringify(
						props.order,
						null,
						2
					)
				}
			</pre>
		</Dialog>
	);
};

OrderDialog.propTypes = {
	order: PropTypes.object.isRequired,
	handleClose: PropTypes.func.isRequired,
};
