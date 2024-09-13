import { createSlice } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';

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
			try {
				state.user =
					typeof action.payload.token === 'string'
						? jwtDecode(action.payload.token)
						: null;
			} catch (error) {
				console.error('Error decoding token:', error);
				state.user = null;
			}
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
