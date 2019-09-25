import React, {useState, useEffect} from "react";
import { Navigation } from "IndexComponents/navigation";
import { OrdersContainer } from "IndexContainers/ordersContainer";
import { NavigationContainer } from "IndexContainers/navigationContainer";
import { OrderCard } from "IndexComponents/orderCard";
import { OrderDialog } from "IndexComponents/orderDialog";
import { getOrders } from "./../helpers/getOrders.js";

export const AppContainer = () => {

	useEffect(() => {
		/**
		* Fetches (possibly new) orders
		* each minute
		*/
		const interval = setInterval(
			() => {
				setOrders(
					getOrders()
				);
			},
			60000
		);
		return () => clearInterval(interval);
	}, []);

	// All possible orders
	const [orders, setOrders] = useState( getOrders() );

	// Modal state (modal is used insted of pages for the sake of easiness)
	const [orderOpened, setOrderOpened] = React.useState({});
	const handleOrderClose = () => {

		// Deletes pseudo-id
		history.replaceState(null, null, ` `);

		setOrderOpened({});

	};

	const openOrderModule = e => {

		const orderData = JSON.parse(
			e.currentTarget.getAttribute(`data-order`)
		);

		// Adds pseudo-id to href to make page address differ.
		window.location.href += `#orderID=${orderData.OrderID}`;

		setOrderOpened( orderData );

	};
	/**
	* Constructs object with
	* all the same data +
	* its visualisation.
	*
	* There is an option to
	* assign prop directly on
	* "orders", but this
	* is not reccomended.
	*/
	const allOrders = orders.map(

		e => {

			// Clones e
			let record = {...e};

			// Adds visaulisation
			record.View = (
				<OrderCard
					key = { e.OrderID }
					order = { e }
					handleClick = { openOrderModule }
				/>
			);

			return record;

		}

	);

	/**
	* Sorts & filters orders as needed
	* using JSON data. After all
	* operations are done, returns
	* all necessary visualisations.
	*/
	const ordersToShow = allOrders
		.sort( (a,b) => {} )
		.filter(v => true)
		.map( e => e.View );

	return (
		<>
			<NavigationContainer

			/>
			<OrdersContainer>
				{ ordersToShow }
			</OrdersContainer>
			<OrderDialog
				order = { orderOpened }
				handleClose = { handleOrderClose }
			/>
		</>
	);

};
