import { Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import CartTotals from './CartTotals';
import EmptyCart from './EmptyCart';
import Navbar from '../NavbarComponent/Navbar';
import { createMuiTheme,responsiveFontSizes,MuiThemeProvider} from '@material-ui/core';
let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
const Cart = () => {
	const { cart, setCart } = useContext(CartContext);
	const [ cartss ] = cart;
	return (
		<div>
		<MuiThemeProvider theme={theme}>
			{cartss.length > 0 ? (
				<>
				<Navbar />
					<div className="cartTitle">
						<div className="cartTitle1">
							<Typography variant="headline" component="h1">
								My Cart
							</Typography>
						</div>
						<div className="cartMain">
							<Typography variant="h5">
								BrandName
							</Typography>
							<Typography variant="h5">
								Item Price
							</Typography>
							<Typography variant="h5">
								Item Count
							</Typography>
							<Typography variant="h5">
								Item Totals
							</Typography>
						</div>
					</div>

					{cartss.map((item) => (
						<div>
							<div className="cartMain">
								<Typography variant="subtitle1">
									{item.brandName}
								</Typography>
								<Typography variant="subtitle1">
									{item.price}
								</Typography>
								<Typography variant="subtitle1">
									{item.count}
								</Typography> 
								<Typography variant="subtitle1">
									{item.price * item.count}
								</Typography>
							</div>
						</div>
					))}
					<CartTotals />
				</>
			) : (
				<EmptyCart />
			)}
			</MuiThemeProvider>
		</div>
	);
};

export default Cart;
