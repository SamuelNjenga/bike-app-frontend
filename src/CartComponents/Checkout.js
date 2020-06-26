import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
const Checkout = () => {
	return (
		<div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
			<Link to="/bike" style={{ textDecoration: 'none' }}>
				<Button variant="contained" style={{ marginRight: '15px' }}>
					CONTINUE SHOPPING
				</Button>
			</Link>
			<Button variant="contained" style={{ backgroundColor: 'lightblue', marginRight: '15px' }}>
				PROCEED TO CHECKOUT
			</Button>
		</div>
	);
};

export default Checkout;
