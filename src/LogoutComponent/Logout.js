import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { LoginContext } from '../LoginComponent/LoginContext';
const Logout = () => {
	let history = useHistory();
	const { isAuthenticated } = useContext(LoginContext);
	const [ isAuthenticatedd, setAuthentication ] = isAuthenticated;
	localStorage.removeItem('token');
	localStorage.removeItem('userEmail');
	localStorage.removeItem('userPassword');
	setAuthentication(false);
	console.log(isAuthenticated);
	history.push('/login');
	return <div />;
};

export default Logout;
