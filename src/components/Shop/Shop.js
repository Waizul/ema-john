import useCart from '../../hook/useCart';
import useProducts from '../../hook/useProducts';
import Cart from '../Cart/Cart';
import { addData } from '../LocalData/LocalData';
import OrderReview from '../OrderReview/OrderReview';
import Product from '../Product/Product';
import Search from '../Search/Search';
import './Shop.css';

const Shop = () => {
	const [products] = useProducts();
	const [cart, setCart] = useCart();

	const handleAddToCart = (product) => {
		let quantityCheck = cart.find((p) => p.key === product.key);
		let newCart = [];
		if (quantityCheck) {
			const rest = cart.filter((p) => p.key !== product.key);
			quantityCheck.quantity = quantityCheck.quantity + 1;
			newCart = [...rest, quantityCheck];
		} else {
			product.quantity = 1;
			newCart = [...cart, product];
		}
		setCart(newCart);
		addData(product.key);
	};

	return (
		<div className='div'>
			<Search></Search>
			<div className='shop-container'>
				<div className='product-container'>
					{products.map((product) => (
						<Product
							product={product}
							handleAddToCart={handleAddToCart}
							key={product.key}
						></Product>
					))}
				</div>

				<div className='cart-container'>
					<Cart cart={cart}>
						<button>Review your Order</button>
					</Cart>
				</div>
			</div>
			<OrderReview></OrderReview>
		</div>
	);
};

export default Shop;
