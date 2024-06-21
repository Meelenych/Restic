import Navigation from './Navigation';

const Footer = () => {
	return (
		<footer className='bg-emerald-500'>
			<div className='grid grid-cols-2 gap-3'>
				<div className='w-9'></div>
				<Navigation layout='column' />
			</div>
			<p>&copy; 2024 My Next.js Site</p>
		</footer>
	);
};

export default Footer;
