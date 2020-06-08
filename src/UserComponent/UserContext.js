import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
export const UserContext = createContext();
export const UserProvider = (props) => {
	const [ user, setUser ] = useState([]);

	const email = localStorage.getItem('userEmail');

	useEffect(
		() => {
			axios
				.get(`http://localhost:3001/api/getUserById/${email}`)
				.then((res) => {
					setUser(res.data);
				})
				.catch((e) => {
					console.log(e);
				});
		},
		[ email ]
	);
	return (
		<UserContext.Provider
			value={{
				user: [ user, setUser ]
			}}
		>
			{props.children}
		</UserContext.Provider>
	);
};
