import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import axios from 'axios';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { LoginContext } from '../LoginComponent/LoginContext';
import Navbar from '../NavbarComponent/Navbar';
export const UserLogin = () => {
	let history = useHistory();
	const { isAuthenticated } = useContext(LoginContext);
	const [ isAuthenticatedd, setAuthentication ] = isAuthenticated;

	const [ item, setItem ] = React.useState({
		email: '',
		password: ''
	});

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

		console.log('KEMA', item1.email);
		axios
			.post(`http://localhost:3001/api/loginn`, item1)
			.then((resp) => {
				if (resp.status === 200) {
					history.push('/');
					localStorage.setItem('token', resp.data.accessToken);
					localStorage.setItem('userEmail', JSON.stringify(resp.data.data.email));
					localStorage.setItem('userId', JSON.stringify(resp.data.data.id));
					localStorage.setItem('userPassword', item1.password);
					setAuthentication(true);
				} else {
					alert('Wrong credentials');
				}
			})
			.catch((err) => {
				alert('An error occurred ' + err.message);
			});
	};

	return (
		<div>
			<Navbar />
			<div className="container">
				<form onSubmit={handleSubmit}>
					<div>
						<TextField
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<AccountCircle />
									</InputAdornment>
								)
							}}
							type="email"
							label="Email"
							name="email"
							id="email"
							value={item.email}
							onChange={handleChange}
							placeholder="Enter your Email"
						/>
					</div>
					<div>
						<TextField
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<AccountCircle />
									</InputAdornment>
								)
							}}
							label="Password"
							type="password"
							name="password"
							id="password"
							value={item.password}
							onChange={handleChange}
							placeholder="Enter your password"
						/>
					</div>
					<div>
						<Button variant="contained" style={{backgroundColor:'lightblue',marginTop: 20}} type="submit">
							Login
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default UserLogin;
