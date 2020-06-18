import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React, { useContext } from 'react';
import Navbar from '../NavbarComponent/Navbar';
import { UserContext } from '../UserComponent/UserContext';
import axios from 'axios';
const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1)
		}
	}
}));

export default function ComposedTextField() {
	const { user } = useContext(UserContext);
	const [ users, setUser ] = user;
	const userEmail = localStorage.getItem('userEmail');
	const [ item, setItem ] = React.useState({
		firstName: users.firstName,
		lastName: users.lastName,
		userName: users.userName,
		email: users.email,
		gender: users.gender
	});

	// const [ name, setName ] = React.useState('Composed TextField');
	const classes = useStyles();

	const handleChange = (event) => {
		event.persist();
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
			axios.patch(`http://localhost:3001/api/user/${userEmail}`, item1);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div>
			<Navbar />

			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<form className={classes.root} onSubmit={handleSubmit}>
					<div>
						<TextField
							label="First Name"
							type="text"
							name="firstName"
							id="firstName"
							value={item.firstName}
							onChange={handleChange}
							placeholder="Enter your First Name"
						/>
					</div>
					<div>
						<TextField
							label="Last Name"
							type="text"
							name="lastName"
							id="lastName"
							value={item.lastName}
							onChange={handleChange}
							placeholder="Enter your Last Name"
						/>
					</div>
					<div>
						<TextField
							label="Email"
							type="email"
							name="email"
							id="email"
							value={item.email}
							onChange={handleChange}
							placeholder="Enter your Email"
						/>
					</div>
					<div>
						<TextField
							label="User Name"
							type="text"
							name="userName"
							id="userName"
							value={item.userName}
							onChange={handleChange}
							placeholder="Enter your User Name"
						/>
					</div>

					<div>
						<input
							type="radio"
							checked={item.gender === 'male'}
							value="male"
							onChange={handleChange}
							name="Male"
						/>Male
						<input
							type="radio"
							checked={item.gender === 'female'}
							value="female"
							onChange={handleChange}
							name="Female"
						/>Female
					</div>
					<Button variant="contained" color="primary" type="submit">
						SAVE
					</Button>
				</form>
			</div>
		</div>
	);
}
