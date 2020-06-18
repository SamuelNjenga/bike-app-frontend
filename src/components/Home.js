import React from 'react';
// import Navbar from './NavBar';
import Navbar from '../NavbarComponent/Navbar'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import AwesomeSlider from 'react-awesome-slider';
import Footer from './Footer';
import 'react-awesome-slider/dist/styles.css';
import Experience from './Experience';
const useStyles = makeStyles({
	typo: {
		padding: '40px',
		color: 'black'
	}
});

export const Home = () => {
	const classes = useStyles();
	return (
		<div>
			<Navbar />
			<div className="c1">
				<Box boxShadow={10} border={1} borderColor="grey.500" borderRadius={4}>
					<Typography gutterBottom variant="headline" component="h2" className={classes.typo}>
						Welcome to our bike portal
					</Typography>
				</Box>
			</div>
			<div className="container" style={{ height: '400px', paddingBottom: '100px', backgroundColor: 'white' }}>
				<AwesomeSlider>
					<div data-src="../images/bike-engine-machine-motorcycle-595808.jpg" />
					<div data-src="../images/black-and-blue-sports-bike-40904.jpg" />
					<div data-src="../images/selective-focus-photo-of-parked-blue-and-black-cafe-racer-2549941.jpg" />
				</AwesomeSlider>
			</div>
			<div className="c1">
				<div>
					<Typography gutterBottom variant="headline" component="h2" className={classes.typo}>
						Top Selling Items
					</Typography>
				</div>
				<div>
					<Typography gutterBottom variant="headline" component="h2" className={classes.typo}>
						Recommended items for you
					</Typography>
				</div>
			</div>
			<Experience />

			<Footer />
		</div>
	);
};
export default Home;
