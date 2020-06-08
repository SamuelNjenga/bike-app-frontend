import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
const Experience = () => {
	return (
		<div style={{ marginBottom: '20px', paddingLeft: '20px' }}>
			<Box boxShadow={10} border={1} borderColor="grey.500" borderRadius={4}>
				<Typography>Online Shopping with Waendeshaji Bike Portal </Typography>
				<Typography>Waendeshaji Bike Portal is your number one Online Shopping solution for bikes.</Typography>
				<Typography>
					We offer quite a number of services ranging from bike purchasing,online help as well as other
					services in our application
				</Typography>
			</Box>
		</div>
	);
};

export default Experience;
