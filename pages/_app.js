import '../styles/global.css';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/authSlice';

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<AuthLoader>
				<Component {...pageProps} />
				<Toaster
					position='top-center'
					reverseOrder={false}
				/>
			</AuthLoader>
		</Provider>
	);
}

function AuthLoader({ children }) {
	const dispatch = useDispatch();

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token) {
			dispatch(logIn({ token }));
		}
	}, [dispatch]);

	return children;
}

export default MyApp;
