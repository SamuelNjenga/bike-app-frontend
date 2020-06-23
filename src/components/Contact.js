import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Navbar from '../NavbarComponent/Navbar';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(5),
			width: '25ch',
			display: 'flex',
			flexDirection: 'row'
		}
	}
}));

const Contact = () => {
	const classes = useStyles();

	const [ item, setItem ] = React.useState({
		name: '',
		email: '',
		message: ''
	});

	const handleChange = (event) => {
		const target = event.target;
		const value = target.value;
		setItem({ ...item, [event.target.name]: value });
	};
	const handleSubmit = async (event) => {
		event.preventDefault();
		const item1 = { ...item };
		try {
			axios.post(`http://localhost:3001/api/contact`, item1);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<Navbar />
			<form className={classes.root}  onSubmit={handleSubmit}>
				<TextField
					label="Name"
					placeholder={'Enter your name'}
					name="name"
					value={item.name}
					onChange={handleChange}
				/>
				<TextField
					id="standard-basic"
					label="Email"
					name="email"
					placeholder={'Enter your email'}
					onChange={handleChange}
					value={item.email}
				/>
				<TextField
					id="standard-basic"
					type="text"
					name="message"
					label="Message"
					placeholder={'Enter your message'}
					onChange={handleChange}
					value={item.message}
				/>

				<Button variant="contained" style={{backgroundColor:'lightblue'}} type="submit">
					Send
				</Button>
			</form>
		</>
	);
};

export default Contact;
