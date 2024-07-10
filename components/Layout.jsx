import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
	return (
		<div className='flex flex-col min-h-screen'>
			<Header />
			<main className='flex-grow bg-gradient-to-br from-emerald-400 via-purple-500 to-red-500'>
				<div className=''>{children}</div>
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
