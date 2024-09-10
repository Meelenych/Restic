import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	items: [], // Array to store cart items
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem: (state, action) => {
			// Check if item already exists in the cart
			const existingItem = state.items.find(item => item.id === action.payload.id);
			if (existingItem) {
				// If the item already exists, update its quantity
				existingItem.quantity += action.payload.quantity;
			} else {
				// If the item doesn't exist, add it to the cart
				state.items.push(action.payload);
			}
		},
		removeItem: (state, action) => {
			// Filter out the item to be removed by its ID
			state.items = state.items.filter(item => item.id !== action.payload);
		},
		updateQuantity: (state, action) => {
			const item = state.items.find(item => item.id === action.payload.id);
			if (item) {
				item.quantity = action.payload.quantity;
			}
		},
		clearCart: state => {
			state.items = []; // Clear all items from the cart
		},
	},
});

export const { addItem, removeItem, updateQuantity, clearCart } =
	cartSlice.actions;
export default cartSlice.reducer;
