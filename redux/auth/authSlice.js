import { createSlice } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';

const isTokenExpired = token => {
	try {
		const decoded = jwtDecode(token);
		const now = Date.now() / 1000;
		return decoded.exp < now; // Return true if expired
	} catch (error) {
		console.error('Error decoding token:', error);
		return true; // If decoding fails, consider it expired
	}
};

const initialState = {
	loggedIn: false,
	token: null,
	user: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuthFromLocalStorage: (state, action) => {
			const token = action.payload;
			if (token && typeof token === 'string' && !isTokenExpired(token)) {
				state.loggedIn = true;
				state.token = token;
				state.user = jwtDecode(token); // Safe to decode now
			} else {
				state.loggedIn = false;
				state.token = null;
				state.user = null;
			}
		},
		logIn: (state, action) => {
			const token = action.payload;
			if (token && typeof token === 'string') {
				state.loggedIn = true;
				state.token = token;
				try {
					state.user = jwtDecode(token); // Safe to decode
				} catch (error) {
					console.error('Error decoding token:', error);
					state.user = null;
				}
				if (typeof window !== 'undefined') {
					localStorage.setItem('token', token);
				}
			}
		},
		logOut: state => {
			state.loggedIn = false;
			state.token = null;
			state.user = null;
			if (typeof window !== 'undefined') {
				localStorage.removeItem('token');
			}
		},
	},
});

export const { setAuthFromLocalStorage, logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
