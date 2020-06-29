import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import axios from 'axios';

const Checkout = () => {
	const { cart, setCart } = useContext(CartContext);
	const [ cartss ] = cart;

	const j = () => {
		for (let i in cartss) {
			if (cartss[i].bikeId) {
				const itemsPerBikeId = { count: cartss[i].count };
				try {
					axios.patch(`http://localhost:3001/api/selling/${cartss[i].bikeId}`, itemsPerBikeId);
				} catch (err) {
					console.log(err);
				}
			}
		}
	};
	return (
		<div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
			<Link to="/bike" style={{ textDecoration: 'none' }}>
				<Button variant="contained" style={{ marginRight: '15px' }}>
					CONTINUE SHOPPING
				</Button>
			</Link>
			<Button variant="contained" style={{ backgroundColor: 'lightblue', marginRight: '15px' }} onClick={j}>
				PROCEED TO CHECKOUT
			</Button>
		</div>
	);
};

export default Checkout;
