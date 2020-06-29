import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

const useStyles = makeStyles({
	typo: {
		color: 'black'
	},
	btn: {
		color: 'primary',
		variant: 'outlined',
		size: 'large'
	}
});

const Bike = (props) => {
	const classes = useStyles();
	const { bikes } = useContext(CartContext);
	const [ bikess ] = bikes;
	const { cart } = useContext(CartContext);
	const [ cartss, setCart ] = cart;
	const { bikeIdNumber } = useContext(CartContext);
	const [ bikeId, setBikeId ] = bikeIdNumber;

	const h = () => {
		setBikeId(props._id);
	};
	const addToCart = () => {
		const bike = { brandName: props.name, price: props.price, count: props.count, bikeId: props._id };

		for (let i in cartss) {
			if (cartss[i].brandName === props.name) {
				cartss[i].count += 1;
				console.log('count plus one');
				console.log(cartss);
				return;
			}
		}
		setCart((curr) => [ ...curr, bike ]);

		console.log(cartss);
	};

	return (
		<div>
			<Card raised="true">
				{/* <CardMedia  title="Halloss"/> */}
				<CardContent>
					<Typography gutterBottom variant="headline" component="h2">
						{props.name}
					</Typography>
					<Typography variant="headline" component="h5">
						{props.bikeType}
					</Typography>
					<Typography variant="headline" component="h5">
						{props.bikeDescription}
					</Typography>
					<Typography variant="headline" component="h5">
						{props.price}
					</Typography>
				</CardContent>
				<CardActions>
					<Link to="/bikedescription" style={{ textDecoration: 'none' }}>
						<Button color="primary" variant="outlined" className={classes.btn} onClick={h}>
							View More
						</Button>
					</Link>

					<Button color="primary" variant="outlined" className={classes.btn} onClick={addToCart}>
						Add To Cart
					</Button>
				</CardActions>
			</Card>
		</div>
	);
};

export default Bike;
