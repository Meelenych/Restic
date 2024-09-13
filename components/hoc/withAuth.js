import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const withAuth = WrappedComponent => {
	return props => {
		const router = useRouter();
		const isAuthenticated = useSelector(state => state.auth.loggedIn); // Adjust based on your state shape

		useEffect(() => {
			if (!isAuthenticated) {
				router.push('/login'); // Redirect to the login page
			}
		}, [isAuthenticated, router]);

		// Render the wrapped component only if authenticated
		return isAuthenticated ? <WrappedComponent {...props} /> : null;
	};
};

export default withAuth;
