import React, { useContext } from 'react';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartComponents/CartContext';
import { LoginContext } from '../LoginComponent/LoginContext';

const Ul = styled.ul`
	list-style: none;
	display: flex;
	flex-flow: row no-wrap;
	li {
		padding: 18px 10px;
	}
	@media (max-width: 768px) {
		${'' /* display:none; */} flex-flow:column nowrap;
		background-color: #0d2538;
		position: fixed;
		transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
		top: 0;
		right: 0;
		z-index: 11;
		height: 100vh;
		width: 300px;
		padding-top: 3.5rem;
		transition: transform 0.3s ease-in-out;

		li {
			color: #fff;
		}
	}
`;
const RightNav = ({ open }) => {
	const { cart, setCart } = useContext(CartContext);
	const [ cartss ] = cart;
	const { isAuthenticated } = useContext(LoginContext);
	const [ isAuthenticatedd, setAuthentication ] = isAuthenticated;
	return (
		<Ul open={open}>
			<Link to="/" style={{ textDecoration: 'none' }}>
				<li>Home</li>
			</Link>
			<Link to="/bike" style={{ textDecoration: 'none' }}>
				<li>Services</li>
			</Link>
			<Link to="/contact" style={{ textDecoration: 'none' }}>
				<li>Contacts</li>
			</Link>

			<Link to="/cart" style={{ textDecoration: 'none' }}>
				<IconButton
					onClick={() => {
						console.log('plus');
					}}
				>
					<AddShoppingCartIcon />
					<p>{cartss.length}</p>
				</IconButton>
			</Link>
			{isAuthenticatedd ? (
				<>
					<Link to="/myaccount" style={{ textDecoration: 'none' }}>
						<li>My Account</li>
					</Link>
					<Link to="/logout" style={{ textDecoration: 'none' }}>
						<li>Log Out</li>
					</Link>
				</>
			) : (
				<>
					<Link to="/login" style={{ textDecoration: 'none' }}>
						<li>Log in</li>
					</Link>
					<Link to="/userRegistration" style={{ textDecoration: 'none' }}>
						<li>Sign Up</li>
					</Link>
				</>
			)}
		</Ul>
	);
};

export default RightNav;
