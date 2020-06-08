import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import { Link } from 'react-router-dom';
const AccountSetting = () => {
	return (
		<div className="container" style={{ display: 'flex', flexDirection: 'column' }}>
			<div style={{ display: 'flex', flexDirection: 'row' }}>
				<Typography>My Account Settings</Typography>
				<SettingsApplicationsIcon color="primary" />
			</div>

			<div className="accountSettings">
				<Box border={1} borderRadius="borderRadius" borderColor="grey.500" boxShadow={2}>
					<div>
						<Link to="/personaldetails" style={{ textDecoration: 'none' }}>
							<Typography>Details</Typography>
						</Link>
					</div>
					<div>
						<Link to="/contact" style={{ textDecoration: 'none' }}>
							<Typography>Address Book</Typography>
						</Link>
					</div>
					<div>
						<Link to="/changepassword" style={{ textDecoration: 'none' }}>
							<Typography>Change Password</Typography>
						</Link>
					</div>
				</Box>
			</div>
		</div>
	);
};

export default AccountSetting;
