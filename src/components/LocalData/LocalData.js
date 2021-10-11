const setData = (cart) => localStorage.setItem('cart', JSON.stringify(cart));

const getData = () => localStorage.getItem('cart');

const addData = (Id) => {
	const presentData = getData();

	let cartData = {};
	if (!presentData) {
		cartData[Id] = 1;
	}
	if (presentData) {
		cartData = JSON.parse(presentData);
		if (cartData[Id]) {
			const newCartData = cartData[Id] + 1;
			cartData[Id] = newCartData;
		} else {
			cartData[Id] = 1;
		}
	}
	setData(cartData);
};

const storedCart = () => {
	const stored = getData();
	return stored ? JSON.parse(stored) : {};
};

const removeStoredCart = (id) => {
	const cart = JSON.parse(getData());
	delete cart[id];
	setData(cart);
};
const clearWholeCart = () => localStorage.removeItem('cart');

export { addData, storedCart, removeStoredCart, clearWholeCart };
