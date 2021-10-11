import React from 'react';
import './Product.css'
const Product = (props) => {
    const {name, price, img, seller, stock} = props.product
    const {handleAddToCart} = props
    return (
		<div className='product'>
			<img src={img} width='300px' height='300px' alt='' />
			<div>
				<div className='product-info'>
					<h4>{name}</h4>
					<h5>${price}</h5>
					<p>
						A product of <b>{seller}</b>
					</p>
					<p>
						only <b>{stock}</b> left in stock - order soon
					</p>
					<button onClick={()=>handleAddToCart(props.product)}>add to cart</button>
				</div>
                <div>
                
                </div>
			</div>
		</div>
	);
};

export default Product;