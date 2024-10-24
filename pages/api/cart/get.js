import supabase from '../../../db';

export default async function handler(req, res) {
	const { user_id } = req.query;

	const { data: cart, error } = await supabase
		.from('carts')
		.select('id')
		.eq('user_id', user_id)
		.single();

	if (error) {
		return res.status(500).json({ error: error.message });
	}

	const { data: cartItems, error: itemsError } = await supabase
		.from('cart_items')
		.select('menu_item_id, quantity')
		.eq('cart_id', cart.id);

	if (itemsError) {
		return res.status(500).json({ error: itemsError.message });
	}

	res.status(200).json({ cartItems });
}
