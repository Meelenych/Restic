import Navigation from './Navigation';
import Image from 'next/image';
import Link from 'next/link';
import planetXprs from '../assets/png/Planet_Exp.png';
import styles from '../styles/Footer.module.css';
import CircleText from '../helpers/CircleText';

const Footer = () => {
	return (
		<footer className='bg-emerald-500 h-1/6 p-4'>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-3 items-center'>
				<div className='flex items-center justify-around p-4'>
					<Link
						href='/'
						className='hover:animate-flip-x '>
						<Image
							className='w-[86px] md:w-32 lg:w-[156px] h-auto hover:-translate-y-1 hover:drop-shadow-2xl active:drop-shadow-lg active:translate-y-0 transition ease-out duration-300'
							src={planetXprs}
							alt='Planet Express Logo'
						/>
					</Link>
					<Link
						href='/delivery'
						className='hover:animate-flip-x '>
						<div className='flex items-center justify-center w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 relative border-2 md:border-[3px] lg:border-4 border-black bg-amber-50 rounded-full hover:-translate-y-1 hover:drop-shadow-2xl active:drop-shadow-lg active:translate-y-0 transition ease-out duration-300'>
							<CircleText text='order delivery' />
							<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border md:border-2 border-black bg-red-600 w-11 h-11 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full'></div>
						</div>
					</Link>
					<Link
						href='/book'
						className='hover:animate-flip-x '>
						<div className='flex items-center justify-center w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 relative border-2 md:border-[3px] lg:border-4 border-black bg-amber-50 rounded-full hover:-translate-y-1 hover:drop-shadow-2xl active:drop-shadow-lg active:translate-y-0 transition ease-out duration-300'>
							<CircleText text='book a table' />
							<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border md:border-2 border-black bg-red-600 w-11 h-11 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full'></div>
						</div>
					</Link>
				</div>
				<Navigation layout='column' />
			</div>
			<p className='text-center mt-4'>&copy; 2024 My Next.js Site</p>
		</footer>
	);
};

export default Footer;
