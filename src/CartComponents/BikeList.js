import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import Bike from './Bike';
import Navbar from '../components/NavBar';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
const BikeList = () => {
	const { bikes, isLoading } = useContext(CartContext);
	const [ bikess ] = bikes;
	const [ isLoadings ] = isLoading;
	if (isLoadings) {
		return (
			<div>
				<Navbar />
				<div className="container">
					<CircularProgress />
				</div>
			</div>
		);
	}
	return (
		<div>
			<Navbar />
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<Typography variant="headline" component="h2">
					Available Bikes
				</Typography>
			</div>
			<Grid container spacing={2} style={{ padding: 24 }}>
				{bikess.map((item, value) => (
					<Grid key={value} item xs={12} sm={6} lg={3} xl={3}>
						<Bike
							key={item.id}
							name={item.brandName}
							price={item.price}
							_id={item._id}
							count={item.count}
							bikeDescription={item.bikeDescription}
						/>
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default BikeList;
