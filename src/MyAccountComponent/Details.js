import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React, { useContext } from 'react';
import Navbar from '../components/NavBar';
import { UserContext } from '../UserComponent/UserContext';
const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1)
		}
	}
}));

export default function ComposedTextField() {
	const [ name, setName ] = React.useState('Composed TextField');
	const classes = useStyles();

	const { user } = useContext(UserContext);
	const [ users, setUser ] = user;

	const handleChange = (event) => {
		setName(event.target.value);
	};

	return (
		<div>
			<Navbar />

			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<form className={classes.root} noValidate autoComplete="off">
					<div>
						<TextField
							label="First Name"
							type="text"
							name="firstName"
							id="firstName"
							value={users.firstName}
							onChange={handleChange}
							placeholder="Enter your Email"
						/>
					</div>
					<div>
						<FormControl>
							<InputLabel htmlFor="component-simple">Last Name</InputLabel>
							<Input id="component-simple" value={users.lastName} onChange={handleChange} />
						</FormControl>
					</div>
					<div>
						<FormControl>
							<TextField
								type="email"
								label="Email"
								name="email"
								id="email"
								value={users.email}
								onChange={handleChange}
								placeholder="Enter your Email"
							/>
						</FormControl>
					</div>
					<div>
						<FormControl>
							<TextField
								type="username"
								label="Username"
								name="username"
								id="username"
								value={users.userName}
								onChange={handleChange}
								placeholder="Enter your Username"
							/>
						</FormControl>
					</div>
					<div>
						<FormControl component="fieldset">
							<FormLabel component="legend">Gender</FormLabel>
							<RadioGroup aria-label="gender" name="gender1" value={name} onChange={handleChange}>
								<FormControlLabel value="female" control={<Radio />} label="Female" />
								<FormControlLabel value="male" control={<Radio />} label="Male" />
								<FormControlLabel value="other" control={<Radio />} label="Other" />
								<FormControlLabel
									value="disabled"
									disabled
									control={<Radio />}
									label="(Disabled option)"
								/>
							</RadioGroup>
						</FormControl>
					</div>
					<Button variant="contained" color="primary">
						SAVE
					</Button>
				</form>
			</div>
		</div>
	);
}
