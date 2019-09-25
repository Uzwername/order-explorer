import React from "react";
import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import contentStyles from "IndexStyles/mainContent.scss";

export const OrderDialog = props => {

	const orderIsEmpty = (Object.values(props.order).length === 0);

	const json = JSON.stringify(
		props.order,
		null,
		2
	);

	// Prevents glitch (content flash) on close
	const classes = orderIsEmpty ?
		[contentStyles.dialogWindow, contentStyles.hidden] :
		contentStyles.dialogWindow;

	return (
		<Dialog
			open = { !orderIsEmpty }
			onClose = { props.handleClose }
			className = { classes }
			aria-labelledby = "dialogTitle"
		>
			{

			}
			<DialogTitle
				className = {contentStyles.dialogTitle}
			>
				Order Details
			</DialogTitle>
			<pre
				className = {contentStyles.prettyJSON}
			>
				{
					json
				}
			</pre>
		</Dialog>
	);
};

OrderDialog.propTypes = {
	order: PropTypes.object.isRequired,
	handleClose: PropTypes.func.isRequired,
};
