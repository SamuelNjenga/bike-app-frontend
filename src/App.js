import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import BikeRegistration from './BikeRegistration/BikeRegistration';
import BikeList from './CartComponents/BikeList';
import Cart from './CartComponents/Cart';
import { CartProvider } from './CartComponents/CartContext';
import { CompanyProvider } from './CompanyContext/CompanyContext';
import { OrderProvider } from './OrdersContext/OrderContext';
import BikeDescription from './components/BikeDescription';
import UserRegistration from './UserComponent/UserRegistration';
import CompanyRegistration from './components/CompanyRegistration';
import Contact from './components/Contact';
import Home from './components/Home';
import Login from './components/Login';
import { LoginProvider } from './LoginComponent/LoginContext';
import Logout from './LogoutComponent/Logout';
import ChangePassword from './MyAccountComponent/ChangePassword';
import Details from './MyAccountComponent/Details';
import MyAccount from './MyAccountComponent/MyAccount';
import Order from './MyAccountComponent/Order';
import SellerRegister from './SellerComponent/SellerRegister';
import Nav from './NavbarComponent/Navbar';
import { UserProvider } from './UserComponent/UserContext';
function App() {
	return (
		<CartProvider>
			<OrderProvider>
				<LoginProvider>
					<UserProvider>
						<CompanyProvider>
							<div>
								<Router>
									<Switch>
										<Route path="/nav" exact={true} component={Nav} />
										<Route path="/cart" exact={true} component={Cart} />
										<Route path="/myaccount" exact={true} component={MyAccount} />
										<Route path="/bikedescription" exact={true} component={BikeDescription} />
										<Route path="/" exact={true} component={Home} />
										<Route path="/sellerregister" exact={true} component={SellerRegister} />
										<Route path="/myorder" exact={true} component={Order} />
										<Route path="/changepassword" exact={true} component={ChangePassword} />
										<Route path="/personaldetails" exact={true} component={Details} />
										<Route path="/bike" exact={true} component={BikeList} />
										{/* <Route path="/navbar" exact={true} component={Navbar} /> */}
										<Route
											path="/companyRegistration"
											exact={true}
											component={CompanyRegistration}
										/>
										<Route path="/login" exact={true} component={Login} />
										<Route path="/logout" exact={true} component={Logout} />
										<Route path="/contact" exact={true} component={Contact} />
										<Route path="/bikeRegistration" exact={true} component={BikeRegistration} />
										<Route path="/userRegistration" exact={true} component={UserRegistration} />
									</Switch>
								</Router>
							</div>
						</CompanyProvider>
					</UserProvider>
				</LoginProvider>
			</OrderProvider>
		</CartProvider>
	);
}

export default App;
