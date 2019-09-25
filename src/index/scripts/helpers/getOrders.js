export const getOrders = () => {
	// Mocks an API call

	const allOrders = [
		{
			"OrderID": 1223,
			"Total": 510.14,
			"Items": [
				{
					"SKU": 121,
					"Price": 499.99,
					"Quantity": 1,
				},
				{
					"SKU": 595,
					"Price": 10.15,
					"Quantity": 1,
				},
			],
			"shippingAddress": `Hotel California`,
			"billingAddress": `Hotel California`,
		},
		{
			"OrderID": 1226,
			"Total": 50.00,
			"Items": [
				{
					"SKU": 38,
					"Price": 25.00,
					"Quantity": 2,
				},
			],
			"shippingAddress": `Barcelona`,
			"billingAddress": `Barcelona`,
		},
		{
			"OrderID": 978,
			"Total": 752.10,
			"Items": [
				{
					"SKU": 399,
					"Price": 150.42,
					"Quantity": 5,
				},
			],
			"shippingAddress": `Hotel California`,
			"billingAddress": `Hotel California`,
		},
		{
			"OrderID": 578,
			"Total": 800.00,
			"Items": [
				{
					"SKU": 100,
					"Price": 100.00,
					"Quantity": 5,
				},
				{
					"SKU": 50,
					"Price": 50.00,
					"Quantity": 2,
				},
				{
					"SKU": 200,
					"Price": 200.00,
					"Quantity": 1,
				},
			],
			"shippingAddress": `Sant Q😺`,
			"billingAddress": `Los Angeles`,
		},
		{
			"OrderID": 631,
			"Total": 5.00,
			"Items": [
				{
					"SKU": 5,
					"Price": 5.00,
					"Quantity": 1,
				}
			],
			"shippingAddress": `Málaga`,
			"billingAddress": `Málaga`,
		},
	];

	return allOrders;

};
