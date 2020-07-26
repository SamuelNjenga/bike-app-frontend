import React from 'react';
import Navbar from '../NavbarComponent/Navbar';
import Typography from '@material-ui/core/Typography';
import MyProfile from './MyProfile';
import AccountSetting from './AccountSetting';
import { Link } from 'react-router-dom';
const MyAccount = () => {
	return (
		<div>
			<Navbar />
			<div>
				<MyProfile />
			</div>
			<div>
				<AccountSetting />
			</div>
			<Link to="/logout" style={{ textDecoration: 'none' }}>
				<div className="container" style={{ display: 'flex', flexDirection: 'column' }}>
					<Typography>LOG OUT</Typography>
				</div>
			</Link>
		</div>
	);
};

export default MyAccount;
