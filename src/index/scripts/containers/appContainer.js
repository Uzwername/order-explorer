import React, {useState, useEffect} from "react";
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

	/**
	* Possible modes:
	* 0: All Orders Tab
	* 1: Stage View
	* 2: Global Search Mode
	*/
	const [navMode, setNavMode] = React.useState(0);

	// Modal state (modal is used insted of pages for the sake of easiness)
	const [orderOpened, setOrderOpened] = React.useState({});
	const handleOrderClose = () => {

		// Deletes pseudo-id
		history.replaceState(null, null, ` `);

		setOrderOpened({});

	};

	const openOrderModal = e => {

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
					handleClick = { openOrderModal }
				/>
			);

			return record;

		}

	);

	/**
	* Returns all necessary
	* visualisations.
	*/
	const [ordersToShow, setOrdersToShow] = useState(
		allOrders.map( e => e.View )
	);

	/**
	* Makes it easy to filter and/or
	* sort records & update them
	* with filtered and/or sorted
	* results.
	*/
	const arrangeOrders = (filterFn, sortFn) => {

		/**
		* If none is function, returns.
		*/
		if (
			typeof sortFn !== `function` &&
			typeof filterFn !== `function`
		) return;

		/**
		* To avoid undefined
		* errors.
		*/
		let filteredOrders;
		let sortedOrders;

		/**
		* Filters all orders
		* if filterFn is present.
		* Filtering is previous
		* to sorting in order to
		* possibly reduce time
		* complexity.
		*/
		if ( filterFn ) {

			filteredOrders = allOrders
				.filter(
					filterFn
				);

		}

		/**
		* Sorts either previously
		* filteredOrders or all
		* orders if filterFn was
		* not provided.
		*/
		if ( sortFn ) {

			sortedOrders = (filteredOrders || allOrders)
				.sort(
					sortFn
				);

		}

		setOrdersToShow(
			(sortedOrders || filteredOrders).map(
				e => e.View
			)
		);

	};

	return (
		<>
			<NavigationContainer
				handleShuffle = { arrangeOrders }
				navMode = { navMode }
				setNavMode = { setNavMode }
			/>
			<OrdersContainer
				modality = { navMode }
			>
				{ ordersToShow }
			</OrdersContainer>
			<OrderDialog
				order = { orderOpened }
				handleClose = { handleOrderClose }
			/>
		</>
	);

};
