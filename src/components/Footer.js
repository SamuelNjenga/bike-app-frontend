import React from 'react';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FaceBookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className="c2">
			<Grid container direction="row" justify="center">
				<Grid item xs={12} sm={6} lg={3} xl={3}>
					<Typography>Join us at </Typography>
					<ListItem>
						<IconButton>
							<FaceBookIcon color="primary" />
						</IconButton>
					</ListItem>
					<ListItem>
						<IconButton>
							<TwitterIcon color="primary" />
						</IconButton>
					</ListItem>
					<ListItem>
						<IconButton>
							<InstagramIcon color="primary" />
						</IconButton>
					</ListItem>
				</Grid>
				<Grid item xs={12} sm={6} lg={3} xl={3}>
					<Typography>ABOUT WAENDESHAJI </Typography>
					<ListItem>
						<Typography>About us</Typography>
					</ListItem>
					<ListItem>
						<Typography>Terms and Conditions</Typography>
					</ListItem>
					<ListItem>
						<Typography>Privacy Policy</Typography>
					</ListItem>
				</Grid>
				<Grid item xs={12} sm={6} lg={3} xl={3}>
					<Typography>How You Can Make Money With Us</Typography>
					<Link to="sellerregister" style={{ textDecoration: 'none' }}>
						<ListItem>
							<Typography>Sell On Waendeshaji</Typography>
						</ListItem>
					</Link>
					<ListItem>
						<Typography>Become an Affiliate Partner</Typography>
					</ListItem>
					<ListItem>
						<Typography>Become a sales consultant</Typography>
					</ListItem>
				</Grid>
			</Grid>
		</div>
	);
};

export default Footer;
