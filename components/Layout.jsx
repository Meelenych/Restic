import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
	return (
		<div className='min-h-screen flex flex-col'>
			<Header />
			<main className='flex-grow flex items-center justify-center'>
				{children}
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
