import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const Checkout = () => {
	const { cart, setCart } = useContext(CartContext);
	const [ cartss ] = cart;

	const [ item, setItem ] = React.useState({
		bikeType: '',
		brandName: '',
		price: '',
		numberOfItems: ''
	});

	const totalPrice = cartss.reduce((acc, curr) => acc + curr.price * curr.count, 0);
	const customerIdNumber = JSON.parse(localStorage.getItem('userId'));
	const j = async () => {
		for (let i in cartss) {
			if (cartss[i].bikeId) {
				const itemsPerBikeId = { count: cartss[i].count };
				try {
					await axios.patch(`http://localhost:3001/api/selling/${cartss[i].bikeId}`, itemsPerBikeId);
					await axios.post(`http://localhost:3001/api/order/${customerIdNumber}/${cartss[i].bikeId}`, itemsPerBikeId);
				} catch (err) {
					console.log(err);
				}
			}
		}
	};

	const makePayment = (token) => {
		const body = {
			token,
			totalPrice
		};
		const headers = {
			'Content-Type': 'application/json'
		};
		return fetch(`http://localhost:3001/api/payment`, {
			method: 'POST',
			headers,
			body: JSON.stringify(body)
		})
			.then((response) => {
				console.log('RESPONSE', response);
				const { status } = response;
				console.log('STATUS', status);
			})
			.catch((error) => console.log(error));
	};
	return (
		<div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
			<Link to="/bike" style={{ textDecoration: 'none' }}>
				<Button variant="contained" style={{ marginRight: '15px' }}>
					CONTINUE SHOPPING
				</Button>
			</Link>

			<StripeCheckout
				stripeKey="pk_test_51Gzi4aF9Tjnqa5oo4vSqEViMF7RC2g3PjhYCKt7dYA8gt2gF9Qw4eLiKjcApyphzooIiu6Cceh5VT253xzn2gJbX00lbX3Brqv"
				token={makePayment}
				name="Pay in my react app"
				// billingAddress
				// shippingAddress
				amount={totalPrice * 100}
			>
				<Button variant="contained" style={{ backgroundColor: 'lightblue', marginRight: '15px' }} onClick={j}>
					PROCEED TO CHECKOUT
				</Button>
			</StripeCheckout>
		</div>
	);
};

export default Checkout;
