import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const OrderContext = createContext();
export const OrderProvider = (props) => {
	const [ orders, setOrders ] = useState([]);
	const [ isLoading, setLoading ] = useState(true);

	const set = () =>
		axios
			.get('http://localhost:3001/api/orders')
			.then((res) => {
				setOrders(res.data);
				setLoading(false);
			})
			.catch((e) => {
				console.log(e);
			});
	useEffect(() => {
		set();
	}, []);

	return (
		<OrderContext.Provider
			value={{
				orders: [ orders, setOrders ],
				isLoading: [ isLoading, setLoading ]
			}}
		>
			{props.children}
		</OrderContext.Provider>
	);
};
