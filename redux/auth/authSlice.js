import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loggedIn: false,
	token: null,
	user: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logIn: (state, action) => {
			state.loggedIn = true;
			state.token = action.payload; // Store the token when logging in
			state.user = action.payload.user;
		},
		logOut: state => {
			state.loggedIn = false;
			state.token = null; // Clear the token when logging out
			state.user = null;
		},
	},
});

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
