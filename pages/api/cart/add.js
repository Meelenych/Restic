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
			.eq('cart_id', user_id)
			.single();

		if (cartError) {
			console.error('Error fetching/creating cart:', cartError);
			return res.status(500).json({ error: 'Failed to fetch or create cart' });
		}

		// Check if the menu item is already in the cart
		const { data: existingCartItem, error: existingCartItemError } =
			await supabase
				.from('cart_items')
				.select('*')
				.eq('cart_id', cart.cart_id)
				.eq('menu_item_id', menu_item_id)
				.single(); // Use single() since we're expecting either one or zero rows

		if (existingCartItemError && existingCartItemError.code !== 'PGRST116') {
			// 'PGRST116' means no rows returned, so we ignore that error here
			console.error('Error checking existing cart item:', existingCartItemError);
			return res.status(500).json({ error: 'Error checking cart item' });
		}

		if (existingCartItem) {
			// If the item exists in the cart, update the quantity
			const { error: updateCartItemError } = await supabase
				.from('cart_items')
				.update({ quantity: existingCartItem.quantity + quantity })
				.eq('cart_id', cart.cart_id)
				.eq('menu_item_id', menu_item_id);

			if (updateCartItemError) {
				console.error('Error updating item quantity:', updateCartItemError);
				return res.status(500).json({ error: 'Failed to update item quantity' });
			}

			return res.status(200).json({ message: 'Cart item quantity updated' });
		} else {
			// If the item does not exist in the cart, insert a new row
			const { error: insertCartItemError } = await supabase
				.from('cart_items')
				.insert([{ cart_id: cart.cart_id, menu_item_id, quantity }]);

			if (insertCartItemError) {
				console.error('Error adding item to cart:', insertCartItemError);
				return res.status(500).json({ error: 'Failed to add item to cart' });
			}

			return res.status(200).json({ message: 'Item added to cart' });
		}
	} catch (error) {
		console.error('Error processing request:', error);
		return res.status(500).json({ error: 'Internal server error' });
	}
}
