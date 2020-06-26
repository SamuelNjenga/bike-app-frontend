import { Typography, Button } from '@material-ui/core';
import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import CartTotals from './CartTotals';
import EmptyCart from './EmptyCart';
import Navbar from '../NavbarComponent/Navbar';
import { createMuiTheme,responsiveFontSizes,MuiThemeProvider} from '@material-ui/core';
import Checkout from './Checkout';
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
								BRAND NAME
							</Typography>
							<Typography variant="h5">
								ITEM PRICE
							</Typography>
							<Typography variant="h5">
								ITEM COUNT
							</Typography>
							<Typography variant="h5">
								ITEM TOTALS
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
                    <Checkout />
				</>
			) : (
				<EmptyCart />
			)}
			</MuiThemeProvider>
		</div>
	);
};

export default Cart;
