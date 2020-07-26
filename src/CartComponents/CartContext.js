import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
export const CartContext = createContext();
export const CartProvider = (props) => {
	const [ cart, setCart ] = useState([]);
	const [ bikes, setBikes ] = useState([]);
	const [ bikeId, setBikeId ] = useState('');
	const [ isLoading, setLoading ] = useState(true);

	const setB = () =>
		axios
			.get('http://localhost:3001/api/bikes')
			.then((res) => {
				setBikes(res.data);
				setLoading(false);
			})
			.catch((e) => {
				console.log(e);
			});
	useEffect(() => {
		setB();
	}, []);

	const t = bikes.map(bike => bike._id)

	function newTodo(name){
		return {id : Date.now(), name:name, complete:false}
	}

	return (
		<CartContext.Provider
			value={{
				bikes: [ bikes, setBikes ],
				isLoading: [ isLoading, setLoading ],
				cart: [ cart, setCart ],
				t: t,
				bikeIdNumber: [ bikeId, setBikeId ]
			}}
		>
			{props.children}
		</CartContext.Provider>
	);
};
