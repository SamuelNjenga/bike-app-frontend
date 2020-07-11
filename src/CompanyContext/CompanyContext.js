import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
export const CompanyContext = createContext();
export const CompanyProvider = (props) => {
	const [ companies, setCompanies ] = useState([]);

	useEffect(() => {
		axios
			.get(`http://localhost:3001/api/companies`)
			.then((res) => {
				setCompanies(res.data);
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);
	return (
		<CompanyContext.Provider
			value={{
				company: [ companies, setCompanies ]
			}}
		>
			{props.children}
		</CompanyContext.Provider>
	);
};
