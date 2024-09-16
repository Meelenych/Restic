'use client';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const withAuth = WrappedComponent => {
	const AuthComponent = props => {
		const router = useRouter();
		const isAuthenticated = useSelector(state => state.auth.loggedIn);

		useEffect(() => {
			if (!isAuthenticated) {
				router.push('/login'); // Redirect to the login page
			}
		}, [isAuthenticated, router]);

		// Render the wrapped component only if authenticated
		return isAuthenticated ? <WrappedComponent {...props} /> : null;
	};
	// Set a display name for the HOC for better debugging
	AuthComponent.displayName = `withAuth(${getDisplayName(WrappedComponent)})`;
	return AuthComponent;
};

// Helper function to get the display name of the wrapped component
const getDisplayName = WrappedComponent => {
	return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

export default withAuth;
