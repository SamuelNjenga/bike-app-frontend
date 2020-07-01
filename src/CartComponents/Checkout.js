import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout'

const Checkout = () => {
	const { cart, setCart } = useContext(CartContext);
	const [ cartss ] = cart;
	const totalPrice = cartss.reduce((acc, curr) => acc + curr.price * curr.count, 0);

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
	function handleToken(token,addresses){
     console.log({token,addresses})
	}
	return (
		<div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
			<Link to="/bike" style={{ textDecoration: 'none' }}>
				<Button variant="contained" style={{ marginRight: '15px' }}>
					CONTINUE SHOPPING
				</Button>
			</Link>
			{/* <Button variant="contained" style={{ backgroundColor: 'lightblue', marginRight: '15px' }} onClick={j}>
				PROCEED TO CHECKOUT
			</Button> */}
			<StripeCheckout 
				stripeKey="pk_test_51Gzi4aF9Tjnqa5oo4vSqEViMF7RC2g3PjhYCKt7dYA8gt2gF9Qw4eLiKjcApyphzooIiu6Cceh5VT253xzn2gJbX00lbX3Brqv"
				token={handleToken}
				billingAddress
				shippingAddress
				amount={totalPrice * 100}
			/>
		</div>
	);
};

export default Checkout;
