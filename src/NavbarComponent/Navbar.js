import React from 'react';
import styled from 'styled-components';
const Nav = styled.nav`
	width: 100%;
	height: 65px;
	border-bottom: 2px solid #f1f1f1;
	padding: 0 20px;
    background-color:lightblue;
	display: flex;
	justify-content: space-between;

	.logo {
		padding: 15px 0px;
	}
`;
const Navbar = () => {
	return (
		<Nav>
			<div className="logo">Nav Bar</div>
			
		</Nav>
	);
};

export default Navbar;
