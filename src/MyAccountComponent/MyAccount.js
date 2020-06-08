import React from 'react';
import Navbar from '../components/NavBar';
import Typography from '@material-ui/core/Typography';
import MyProfile from './MyProfile';
import AccountSetting from './AccountSetting';
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
			<div className="container" style={{ display: 'flex', flexDirection: 'column' }}>
				<Typography>LOG OUT</Typography>
			</div>
		</div>
	);
};

export default MyAccount;
