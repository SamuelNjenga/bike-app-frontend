import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import Typography  from '@material-ui/core/Typography'
const CartTotals = () => {
	const { cart } = useContext(CartContext);
	const [ cartss, setCart ] = cart;
	const totalPrice = cartss.reduce((acc, curr) => acc + curr.price * curr.count, 0);
	return (
		<div className="cartTotals">
			<Typography variant="subtitle1">
			{totalPrice}
			</Typography>
		</div>
	);
};

export default CartTotals;
