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
		// Define any synchronous reducers here if needed
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

export default cartSlice.reducer;
