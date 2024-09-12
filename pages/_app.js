import '../styles/global.css';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
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
