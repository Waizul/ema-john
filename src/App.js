import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import OrderReview from './components/OrderReview/OrderReview';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Shop from './components/Shop/Shop';

function App() {
	return (
		<Router>
			<Header></Header>
			<Switch>
				<Route exact path='/'>
					<Shop></Shop>
				</Route>
				<Route path='/shop'>
					<Shop></Shop>
				</Route>
				<Route path='/order'>
					<OrderReview></OrderReview>
				</Route>
				<Route path='/placeorder'>
					<PlaceOrder></PlaceOrder>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
