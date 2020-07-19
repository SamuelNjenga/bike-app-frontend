import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import AccountCircle from '@material-ui/icons/AccountCircle';
import axios from 'axios';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { LoginContext } from '../LoginComponent/LoginContext';
import Navbar from '../NavbarComponent/Navbar';
export const UserRegistration = () => {
	let history = useHistory();
	const { isAuthenticated } = useContext(LoginContext);
	const [ isAuthenticatedd, setAuthentication ] = isAuthenticated;

	const [ item, setItem ] = React.useState({
		firstName: '',
		lastName: '',
		userName: '',
		gender: '',
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
		axios
			.post(`http://localhost:3001/api/signupp`, item1)
			.then((resp) => {
				if (resp.status === 200) {
					history.push('/login');
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
							type="text"
							label="FirstName"
							name="firstName"
							id="firstName"
							value={item.firstName}
							onChange={handleChange}
							placeholder="Enter your First Name"
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
							type="text"
							label="LastName"
							name="lastName"
							id="lastName"
							value={item.lastName}
							onChange={handleChange}
							placeholder="Enter your Last Name"
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
							type="text"
							label="UserName"
							name="userName"
							id="userName"
							value={item.userName}
							onChange={handleChange}
							placeholder="Enter your User Name"
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
							label="Email"
							type="email"
							name="email"
							id="email"
							value={item.email}
							onChange={handleChange}
							placeholder="Enter your email"
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
						<FormControl>
							<FormLabel component="legend">Gender</FormLabel>
							<RadioGroup aria-label="gender" name="gender" value={item.gender} onChange={handleChange}>
								<FormControlLabel value="female" control={<Radio />} label="Female" />
								<FormControlLabel value="male" control={<Radio />} label="Male" />
								<FormControlLabel value="other" control={<Radio />} label="Other" />
							</RadioGroup>
						</FormControl>
					</div>
					<div>
						<Button
							variant="contained"
							style={{ backgroundColor: 'lightblue', marginTop: 20 }}
							type="submit"
						>
							Register
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default UserRegistration;
