import supabase from '../../../db';

export default async function handler(req, res) {
	const { user_id, menu_item_id, quantity } = req.body;

	if (!user_id || !menu_item_id || !quantity) {
		return res.status(400).json({ error: 'Missing required fields' });
	}

	try {
		// Log to check user_id is being passed correctly
		console.log('user_id:', user_id, menu_item_id, quantity);

		// Find or create the cart for the user
		const { data: cart, error: cartError } = await supabase
			.from('carts')
			.select('cart_id')
			.eq('cart_id', user_id) // Ensure user_id is correct
			.maybeSingle();

		if (cartError) {
			console.error('Error fetching/creating cart:', cartError);
			return res.status(500).json({ error: 'Failed to fetch or create cart' });
		}

		// If no cart exists, create a new one
		if (!cart) {
			const { data: newCart, error: createCartError } = await supabase
				.from('carts')
				.insert([{ user_id }])
				.single();

			if (createCartError) {
				console.error('Error creating cart:', createCartError);
				return res.status(500).json({ error: 'Failed to create new cart' });
			}

			// Insert cart item
			const { data: cartItem, error: cartItemError } = await supabase
				.from('cart_items')
				.insert([{ cart_id: newCart.cart_id, menu_item_id, quantity }]);

			if (cartItemError) {
				console.error('Error adding item to cart:', cartItemError);
				return res.status(500).json({ error: 'Failed to add item to cart' });
			}

			return res.status(200).json({ message: 'Item added to cart' });
		}

		// If cart exists, just add the item
		const { data: cartItem, error: cartItemError } = await supabase
			.from('cart_items')
			.insert([{ cart_id: cart.cart_id, menu_item_id, quantity }]);

		if (cartItemError) {
			console.error('Error adding item to cart:', cartItemError);
			return res.status(500).json({ error: 'Failed to add item to cart' });
		}

		return res.status(200).json({ message: 'Item added to cart' });
	} catch (error) {
		console.error('Error processing request:', error);
		return res.status(500).json({ error: 'Internal server error' });
	}
}
