import React from "react";
import { getOrders } from "./../helpers/getOrders.js";
import { MainContent } from "IndexComponents/mainContent.js";

export const MainContentContainer = () => {

	const [activeTab, setActiveTab] = React.useState(0);

	const handleTabChange = (event, newActiveTab) => setActiveTab(newActiveTab);

	const allOrders = getOrders();

	return (
		<MainContent
			activeTab = { activeTab }
			setActiveTab = { handleTabChange }
			orders = { allOrders }
		/>
	);

};
