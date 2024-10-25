import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk for fetching cart data
export const fetchCart = createAsyncThunk('cart/fetchCart', async userId => {
	const response = await axios.get(`/api/cart/get?user_id=${userId}`);
	return response.data.fullCartItems;
});

// Define the initial state of the cart
const initialState = {
	items: [],
	status: 'idle',
	error: null,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState, // Use the initial state here
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
	extraReducers: builder => {
		builder
			.addCase(fetchCart.pending, state => {
				state.status = 'loading';
			})
			.addCase(fetchCart.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.items = action.payload; // Update the cart items
			})
			.addCase(fetchCart.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			});
	},
});

export const { addItem, removeItem, updateQuantity, clearCart } =
	cartSlice.actions;

export default cartSlice.reducer;
