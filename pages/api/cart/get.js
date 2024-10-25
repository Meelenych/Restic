import supabase from '../../../db';

export default async function handler(req, res) {
	const { user_id } = req.query;

	// First, fetch the cart for the user
	const { data: cart, error: cartError } = await supabase
		.from('carts')
		.select('cart_id') // Only select cart_id
		.eq('user_id', user_id)
		.single(); // Use single() to get only one cart

	if (cartError) {
		console.error('Error fetching cart:', cartError);
		return res.status(500).json({ error: cartError.message });
	}

	if (!cart) {
		return res.status(404).json({ error: 'Cart not found for user' });
	}

	// Now fetch cart items using the cart_id
	const { data: cartItems, error: itemsError } = await supabase
		.from('cart_items')
		.select(
			`
            quantity,
            menu_items: menu (
                id,
                title,
                description,
                price,
                image,
                category
            )
        `,
		)
		.eq('cart_id', cart.cart_id); // Use the fetched cart_id

	if (itemsError) {
		console.error('Error fetching cart items:', itemsError);
		return res.status(500).json({ error: itemsError.message });
	}

	// Map the results to include quantity with menu item details
	const fullCartItems = cartItems.map(cartItem => ({
		...cartItem.menu_items,
		quantity: cartItem.quantity,
	}));

	console.log('fullCartItems', fullCartItems);
	res.status(200).json({ fullCartItems });
}
