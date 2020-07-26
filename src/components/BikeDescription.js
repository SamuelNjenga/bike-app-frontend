import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../CartComponents/CartContext';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Navbar from '../NavbarComponent/Navbar';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	paper: {
		margin: theme.spacing(2),
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary
	}
}));

export default function BikeDescription() {
	const classes = useStyles();
	const [ bikes, setBikes ] = useState([]);
	const [ loading, setLoading ] = useState(true);
	const { bikeIdNumber } = useContext(CartContext);
	const [ bikeId, setBikeId ] = bikeIdNumber;
	const id = bikeId;

	const setB = () =>
		axios
			.get(`http://localhost:3001/api/description/${id}`)
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

	return (
		<>
			<Navbar />
{loading ? <div className="container">
					<CircularProgress />
				</div> : 
			<Grid container spacing={3}>
				<Grid item lg={8}>
					<Paper className={classes.paper}>
						<Box boxShadow={10} border={1} borderColor="grey.500" borderRadius={4}>
							Description
							<div>{bikes.map((bike) => bike.bikeDescription)}</div>
							<div>View Seller Information</div>
							{}
						</Box>
					</Paper>
				</Grid>

				<Grid item lg={4}>
					<div>
						<Paper className={classes.paper}>
							<Box boxShadow={10} border={1} borderColor="grey.500" borderRadius={4}>
								<Typography>Key Features </Typography>
								{bikes.map((bike) => bike.keyFeatures)}
							</Box>
						</Paper>
						<Paper className={classes.paper}>
							<Box boxShadow={10} border={1} borderColor="grey.500" borderRadius={4}>
								<Typography>Specifications</Typography>
								{bikes.map(bike => bike.specifications)}
							</Box>
						</Paper>
					</div>
				</Grid>
			</Grid>
}
		</>
	);
}
