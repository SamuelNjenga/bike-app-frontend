import React, { useState, useEffect } from 'react';
import Navbar from '../NavbarComponent/Navbar';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';
const Order = () => {
	const [ orders, setOrders ] = useState([]);
	const [ loading, setLoading ] = useState(true);
	const customerIdNumber = JSON.parse(localStorage.getItem('userId'));
	const set = () =>
		axios
			.get(`http://localhost:3001/api/orders/${customerIdNumber}`)
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
		<div>
			<Navbar />
			<Typography>My Bike Orders So Far</Typography>
			{loading ? <CircularProgress /> : orders.map((item) => 
			<>
			<li key={item.bikeId}>{item.bikeId.brandName} {item.numberOfItemsOrdered}</li>
			</>
			)}
		</div>
	);
};

export default Order;
