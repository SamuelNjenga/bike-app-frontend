import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import React from 'react';
import Navbar from '../components/NavBar';
export const ChangePassword = () => {
	const [ item, setItem ] = React.useState({
		password: ''
	});

	const userPassword = localStorage.getItem('userPassword');
	const userEmail = localStorage.getItem('userEmail');

	const handleChange = (event) => {
		const target = event.target;
		const value = target.value;
		setItem({ ...item, [event.target.name]: value });
	};
	const handleSubmit = async (event) => {
		event.preventDefault();
		const item1 = { ...item };
		console.log('+++++++');
		console.log(item1);

		console.log('KEMA', item1);
		//setUserEmail(item1.email);
		try {
			axios.patch(`http://localhost:3001/api/${userEmail}`, item1);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div>
			<Navbar />
			<div className="container">
				<form onSubmit={handleSubmit}>
					<div>
						<TextField
							label="Old Password"
							type="password"
							name="password"
							id="password"
							value={userPassword}
							onChange={handleChange}
							placeholder="Enter your Email"
						/>
					</div>
					<div>
						<TextField
							label="New Password"
							type="password"
							name="password"
							id="password"
							value={item.password}
							onChange={handleChange}
							placeholder="Enter your password"
						/>
					</div>
					<div>
						<Button variant="contained" type="submit" color="primary" style={{ marginTop: 20 }}>
							Save
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default ChangePassword;
