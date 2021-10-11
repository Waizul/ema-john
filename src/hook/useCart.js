import { useEffect, useState } from "react";
import { storedCart } from "../components/LocalData/LocalData";
import useProducts from "./useProducts";

const useCart = ()=> {
const [cart, setCart] = useState([]);
const [products] = useProducts ()

useEffect(() => {
	const savedCart = storedCart();
	console.log(savedCart);
	const savedProducts = [];
	if (products.length) {
		for (const key in savedCart) {
			const savedProduct = products.find(
				(product) => product.key === key,
			);
			if(savedProduct) {
	const quantity = savedCart[key];

	savedProduct.quantity = quantity;
	savedProducts.push(savedProduct);
	console.log(savedProduct, quantity);
			}
		}
		setCart(savedProducts);
	}
}, [products]);
return[cart, setCart]
}

export default useCart