import '../styles/global.css';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/auth/authSlice';

function MyApp({ Component, pageProps }) {
	const dispatch = useDispatch();

	useEffect(() => {
		const token = localStorage.getItem('authToken');
		if (token) {
			dispatch(login({ token }));
		}
	}, [dispatch]);
	return (
		<Provider store={store}>
			<Component {...pageProps} />
			<Toaster
				position='top-center'
				reverseOrder={false}
			/>
		</Provider>
	);
}

export default MyApp;
