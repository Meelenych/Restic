import Navigation from './Navigation';
import Image from 'next/image';
import Link from 'next/link';
import planetXprs from '../assets/png/Planet_Exp.png';

const Footer = () => {
	return (
		<footer className='bg-emerald-500 p-4'>
			<div className='grid grid-cols-2 gap-3 items-center'>
				<div className='p-10 flex items-center justify-around h-40'>
					<Image
						src={planetXprs}
						alt='Planet Express Logo'
						width={150}
						height={150}
						layout='fixed'
						className='hover:animate-flip-x mr-5'
					/>
					<Link
						href='/delivery'
						className='flex items-center justify-center border-2 border-emerald-500 bg-emerald-300 text-yellow-100 h-20 w-3/4 rounded-xl text-xl hover:-translate-y-1 hover:drop-shadow-2xl active:drop-shadow-lg active:translate-y-0 transition ease-out duration-300'>
						Order delivery
					</Link>
				</div>
				<Navigation layout='column' />
			</div>
			<p className='text-center mt-4'>&copy; 2024 My Next.js Site</p>
		</footer>
	);
};

export default Footer;
