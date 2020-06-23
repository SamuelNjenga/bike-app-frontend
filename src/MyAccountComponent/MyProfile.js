import React from 'react';
import Typography from '@material-ui/core/Typography';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
const MyProfile = () => {
	return (
		<div className="container" style={{ display: 'flex', flexDirection: 'column' }}>
			<div style={{ display: 'flex', flexDirection: 'row' }}>
				<Typography>My Bike Account </Typography>
				<AccountBoxIcon color="primary" />
			</div>

			<div className="accountSettings">
				<Box border={1} borderRadius="borderRadius" borderColor="grey.500" boxShadow={2}>
					<div>
						<Link to="/myorder" style={{ textDecoration: 'none' }}>
							<Typography>Orders</Typography>
						</Link>
					</div>
					<div>
						<Link to="/savedItems" style={{ textDecoration: 'none' }}>
							<Typography>Saved Items</Typography>
						</Link>
					</div>
					<div>
						<Link to="/contact" style={{ textDecoration: 'none' }}>
							<Typography>My Reviews</Typography>
						</Link>
					</div>
					<div>
						<Link to="/bikeRegistration" style={{ textDecoration: 'none' }}>
							<Typography>Register Bike</Typography>
						</Link>
					</div>
				</Box>
			</div>
		</div>
	);
};

export default MyProfile;
