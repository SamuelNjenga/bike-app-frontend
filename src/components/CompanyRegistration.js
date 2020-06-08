import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
export const CompanyRegistration = () => {
	const [ item, setItem ] = React.useState({
		companyName: '',
		companyEmail: ''
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

		try {
			await axios.post(`http://localhost:3001/api/company`, item1);
			console.log('kkk');
		} catch (e) {
			console.log(e);
		}
		//	this.props.history.push('/');
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					<TextField
					
						type="text"
						label="Company Name"
						name="companyName"
						id="email"
						value={item.companyName}
						onChange={handleChange}
						placeholder="Enter your Name"
					/>
				</div>
				<div>
					<TextField
						
						label="Company Email"
						type="companyEmail"
						name="companyEmail"
						id="companyEmail"
						value={item.companyEmail}
						onChange={handleChange}
						placeholder="Enter your company Email"
					/>
				</div>
				<div>
					<Button variant="contained" type="submit" color="primary" style={{marginTop:20}}>
						Submit
					</Button>
				</div>
			</form>
		</div>
	);
};
export default CompanyRegistration;
