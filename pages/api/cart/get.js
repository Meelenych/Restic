import supabase from '../../../db';

export default async function handler(req, res) {
	const { user_id } = req.query;

	// Fetch cart items along with the related menu item data
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
		.eq('cart_id', user_id);

	if (itemsError) {
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
