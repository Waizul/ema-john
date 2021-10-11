import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hook/useCart';
import Cart from '../Cart/Cart';
import { clearWholeCart, removeStoredCart } from '../LocalData/LocalData';
import './../OrderedItem/OrderedItem';
import OrderedItem from './../OrderedItem/OrderedItem';
import './OrderReview.css';

const OrderReview = () => {
	const [cart, setCart] = useCart();
	const handleRemove = (key) => {
		const newCart = cart.filter((product) => product.key !== key);
		setCart(newCart);
		removeStoredCart(key);
	};
	return (
		<div className='shop-container'>
			<div className='product-container'>
				{cart?.map((product) => (
					<OrderedItem
						product={product}
						handleRemove={handleRemove}
					></OrderedItem>
				))}
			</div>

			<div className='cart-container'>
				<Cart cart={cart}>
					<Link to='/placeorder'>
						<button onClick={clearWholeCart}>Place Order</button>
					</Link>
				</Cart>
			</div>
		</div>
	);
};

export default OrderReview;
