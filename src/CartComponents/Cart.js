import { Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import CartTotals from './CartTotals';
import EmptyCart from './EmptyCart';
const Cart = () => {
	const { cart, setCart } = useContext(CartContext);
	const [ cartss ] = cart;
	return (
		<div>
			{cartss.length > 0 ? (
				<div>
					<div className="cartTitle">
						<div className="cartTitle1">
							<Typography variant="headline" component="h1">
								My Cart
							</Typography>
						</div>
						<div className="cartMain">
							<Typography variant="headline" component="h1">
								BrandName
							</Typography>
							<Typography variant="headline" component="h1">
								Item Price
							</Typography>
							<Typography variant="headline" component="h1">
								Item Count
							</Typography>
							<Typography variant="headline" component="h1">
								Item Totals
							</Typography>
						</div>
					</div>

					{cartss.map((item) => (
						<div>
							<div className="cartMain">
								<Typography variant="headline" component="h1">
									{item.brandName}
								</Typography>
								<Typography variant="headline" component="h1">
									{item.price}
								</Typography>
								<Typography variant="headline" component="h1">
									{item.count}
								</Typography>
								<Typography variant="headline" component="h1">
									{item.price * item.count}
								</Typography>
							</div>
						</div>
					))}
					<CartTotals />
				</div>
			) : (
				<EmptyCart />
			)}
		</div>
	);
};

export default Cart;
