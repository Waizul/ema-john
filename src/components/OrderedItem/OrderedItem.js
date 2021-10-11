import React from 'react';
import './OrderedItem.css';

const OrderedItem = (props) => {
	const { name, price, seller, quantity, key } = props.product;
	const { handleRemove } = props;
	console.log(props);
	return (
		<div className='product'>
			<div>
				<div className='product-info'>
					<h4>{name}</h4>
					<h5>${price}</h5>
					<p>
						A product of <b>{seller}</b>
					</p>
					<p>Quantity: {quantity}</p>
					<button onClick={() => handleRemove(key)}>
						Remove Item
					</button>{' '}
				</div>
			</div>
		</div>
	);
};

export default OrderedItem;
