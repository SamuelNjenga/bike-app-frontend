import Typography from '@material-ui/core/Typography';
import React from 'react';
import Navbar from '../NavbarComponent/Navbar';
const EmptyCart = () => {
	return (
		<div>
			<Navbar />
			<Typography variant="headline" component="h2">
				Your cart is currently empty
			</Typography>
		</div>
	);
};

export default EmptyCart;
