import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
	return (
		<div className='min-h-screen flex flex-col'>
			<Header />
			<main className='flex-grow flex flex-col items-start justify-center p-1 md:p-8 lg:p-16'>
				{children}
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
