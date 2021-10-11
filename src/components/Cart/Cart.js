import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = (props) => {
	const { cart } = props;
	// console.log(cart);

	let total = 0;

	let totalQuantity = 0;

	for (const product of cart) {
		total = total + product.price * product.quantity;
		totalQuantity = totalQuantity + product.quantity;
	}
	let shipping = total > 0 ? 15 : 0;
	let tax = (total + shipping) * 0.1;
	let grandTotal = total + shipping + tax;
	return (
		<div className='cart'>
			<h4>Order summary</h4>
			<h5>Ordered Quantity: {totalQuantity}</h5>
			<div className='cart-info'>
				<p>
					<small>Total Price: ${total.toFixed(2)} </small>
				</p>
				<p>
					<small>Shipping cost: ${shipping}</small>
				</p>
				<p>
					<small>Total tax: ${tax.toFixed(2)}</small>
				</p>
				<h5>Grand total: ${grandTotal.toFixed(2)}</h5>
				<Link to='/order'> {props.children}</Link>
			</div>
		</div>
	);
};

export default Cart;
