import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Link } from 'react-router-dom';
import Toolbar from '@material-ui/core/ToolBar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { makeStyles } from '@material-ui/core/styles';
import { CartContext } from '../CartComponents/CartContext';
import { LoginContext } from '../LoginComponent/LoginContext';
const useStyles = makeStyles({
	btn: {
		color: 'white'
	}
});
export const Navbar = () => {
	const classes = useStyles();
	const { cart, setCart } = useContext(CartContext);
	const [ cartss ] = cart;
	const { isAuthenticated } = useContext(LoginContext);
	const [ isAuthenticatedd, setAuthentication ] = isAuthenticated;
	return (
		<div>
			<AppBar position="static">
				<Toolbar className="nav">
					<div>
						<Typography variant="title" color="inherit">
							Waendeshaji Bike Portal
						</Typography>
					</div>
					<div>
						<Link to="/" style={{ textDecoration: 'none' }}>
							<Button className={classes.btn}>Home</Button>
						</Link>
						<Link to="/bike" style={{ textDecoration: 'none' }}>
							<Button className={classes.btn}>Services</Button>
						</Link>
						<Link to="/contact" style={{ textDecoration: 'none' }}>
							<Button className={classes.btn}>Contacts</Button>
						</Link>
					</div>
					<div className="login">
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
							<div>
								<Link to="/myaccount" style={{ textDecoration: 'none' }}>
									<Button className={classes.btn}>My Account</Button>
								</Link>
								<Link to="/logout" style={{ textDecoration: 'none' }}>
									<Button className={classes.btn}>Log Out</Button>
								</Link>
							</div>
						) : (
							<div>
								<Link to="/login" style={{ textDecoration: 'none' }}>
									<Button className={classes.btn}>Log in</Button>
								</Link>

								<Button className={classes.btn}>Sign Up</Button>
							</div>
						)}
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
};
export default Navbar;
