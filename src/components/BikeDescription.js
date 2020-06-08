import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../CartComponents/CartContext';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Navbar from './NavBar';
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
	// let {t} = useContext(CartContext);
	// let id = t;
	const { bikeIdNumber } = useContext(CartContext);
	const [ bikeId, setBikeId ] = bikeIdNumber;
	//const id = '5ed2955227af29188c3ddad5';
	const id = bikeId;
	const setB = () =>
		axios
			.get(`http://localhost:3001/api/getDescription/${id}`)
			.then((res) => {
				setBikes(res.data);
			})
			.catch((e) => {
				console.log(e);
			});
	useEffect(() => {
		setB();
	}, []);
	return (
		<div className={classes.root}>
			<Navbar />
			<Grid container spacing={3}>
				<Grid item lg={8}>
					<Paper className={classes.paper}>
						<Box boxShadow={10} border={1} borderColor="grey.500" borderRadius={4}>
							Description
							<div>{bikes.map((bike) => bike.bikeDescription)}</div>
							<div>View Seller Information</div>
						</Box>
					</Paper>
				</Grid>

				<Grid item lg={4}>
					<div>
						<Paper className={classes.paper}>
							<Box boxShadow={10} border={1} borderColor="grey.500" borderRadius={4}>
								Key Features Kgggggggggggggggggggggggj
							</Box>
						</Paper>
						<Paper className={classes.paper}>
							<Box boxShadow={10} border={1} borderColor="grey.500" borderRadius={4}>
								Specifications Kgggggggggggggggggggggggj
							</Box>
						</Paper>
					</div>
				</Grid>
			</Grid>
		</div>
	);
}
