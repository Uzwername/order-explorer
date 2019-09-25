import React from "react";
import { getOrders } from "./../helpers/getOrders.js";
import { MainContent } from "IndexComponents/mainContent.js";

export const MainContentContainer = () => {

	// Modal state
	const [orderOpened, setOrderOpened] = React.useState({});
	const handleRecordClose = () => {
		setOrderOpened({});
	};

	const handleRecordOpen = e => setOrderOpened( e );

	const allOrders = getOrders();

	return (
		<MainContent
			activeTab = { activeTab }
			setActiveTab = { handleTabChange }
			orders = { allOrders }
			order	= { orderOpened }
			handleRecordOpen = { handleRecordOpen }
			handleRecordClose = { handleRecordClose }
		/>
	);

};
