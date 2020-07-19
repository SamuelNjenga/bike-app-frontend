import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React, { useEffect,useState } from 'react';
import Navbar from '../NavbarComponent/Navbar';
import axios from 'axios';
const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1)
		}
	}
}));

export default function ComposedTextField() {
   const [item,setItem] = useState([])
	const email = JSON.parse(localStorage.getItem('userEmail'));

	useEffect(() => {
		axios
			.get(`http://localhost:3001/api/getUserById/${email}`)
			.then((res) => {
				setItem(res.data);
			})
			.catch((e) => {
				console.log(e);
			});
	}, [email]);
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
		try {
			axios.patch(`http://localhost:3001/api/user/${email}`, item1);
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
					<Button variant="contained" style={{ backgroundColor: 'lightblue' }} type="submit">
						SAVE
					</Button>
				</form>
			</div>
		</div>
	);
}
