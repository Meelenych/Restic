import { supabase } from '../../../db';

export default async function handler(req, res) {
	const { user_id, menu_item_id, quantity } = req.body;

	// Find or create the cart for the user
	const { data: cart, error: cartError } = await supabase
		.from('carts')
		.select('id')
		.eq('user_id', user_id)
		.single();

	if (cartError && cartError.code !== 'PGRST116') {
		return res.status(500).json({ error: cartError.message });
	}

	const cartId = cart ? cart.id : await createCart(user_id);

	// Add item to cart
	const { data, error } = await supabase
		.from('cart_items')
		.insert([{ cart_id: cartId, menu_item_id, quantity }]);

	if (error) {
		return res.status(500).json({ error: error.message });
	}

	res.status(200).json({ data });
}

// Helper function to create a cart for a user
async function createCart(user_id) {
	const { data, error } = await supabase
		.from('carts')
		.insert([{ user_id }])
		.single();

	if (error) {
		throw new Error(error.message);
	}

	return data.id;
}
