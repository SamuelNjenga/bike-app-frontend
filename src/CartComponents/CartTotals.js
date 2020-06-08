import React, { useContext } from 'react';
import { CartContext } from './CartContext';
const CartTotals = () => {
	const { cart } = useContext(CartContext);
	const [ cartss, setCart ] = cart;
	const totalPrice = cartss.reduce((acc, curr) => acc + curr.price * curr.count, 0);
	return (
		<div className="cartTotals">
			<h1>{totalPrice}</h1>
		</div>
	);
};

export default CartTotals;
