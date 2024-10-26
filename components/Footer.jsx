import Navigation from './Navigation';
import Image from 'next/image';
import Link from 'next/link';
import planetXprs from '../assets/images/png/Planet_Exp.png';
import CircleText from '../helpers/CircleText';
import s from '../styles/Footer.module.css';

const Footer = () => {
	return (
		<footer className='bg-emerald-500 h-1/6 p-4'>
			<div className='flex items-center justify-around'>
				<nav className=' flex flex-col md:flex-row items-center justify-around'>
					<Link
						href='/'
						className='hover:animate-spin-slow min-w-[96px] md:min-w-[116px]'>
						<Image
							className='w-[96px] md:w-[116px] lg:w-[116px] h-auto active:drop-shadow-lg active:translate-y-0 transition ease-out duration-300'
							src={planetXprs}
							alt='Planet Express Logo'
						/>
					</Link>
					<Link
						href='/delivery'
						className='hover:animate-spin-slow p-2'>
						<div className='flex items-center justify-center w-20 h-20 md:w-24 md:h-24 lg:w-30 lg:h-30 relative border-2 md:border-[3px] lg:border-3 border-black bg-amber-50 rounded-full active:drop-shadow-lg transition ease-out duration-300'>
							<CircleText text='order delivery' />
							<div className='absolute  border md:border-2 border-black bg-red-600 w-11 h-11 md:w-14 md:h-14 lg:w-14 lg:h-14 rounded-full'></div>
						</div>
					</Link>
					<Link
						href='/book'
						className='hover:animate-spin-slow p-2'>
						<div className='flex items-center justify-center w-20 h-20 md:w-24 md:h-24 lg:w-30 lg:h-30 relative border-2 md:border-[3px] lg:border-3 border-black bg-amber-50 rounded-full active:drop-shadow-lg transition ease-out duration-300'>
							<CircleText text='book a table' />
							<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border md:border-2 border-black bg-red-600 w-11 h-11 md:w-14 md:h-14 lg:w-14 lg:h-14 rounded-full'></div>
						</div>
					</Link>
				</nav>
				<div className='flex justify-center w-10'>
					<div className='w-[1px] h-72 md:h-32 bg-white'></div>
				</div>
				<div className='w-min lg:w-full flex items-center'>
					<Navigation />
				</div>
				<div className='flex justify-center w-10'>
					<div className='w-[1px] h-72 md:h-32 bg-white'></div>
				</div>
				<nav className=''>
					<ul className='flex justify-center items-center flex-col md:flex-row gap-10 md:gap-4'>
						<li className={s.icon}>
							<Link
								href='http://www.x.com'
								target='_blank'>
								<span className={s.tooltip}>Twitter</span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									className={`fill-current ${s.twitter}`}>
									<path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z'></path>
								</svg>
							</Link>
						</li>
						<li className={s.icon}>
							<Link
								href='http://www.youtube.com'
								target='_blank'>
								<span className={s.tooltip}>YouTube</span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									className={`fill-current ${s.youtube}`}>
									<path d='M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z'></path>
								</svg>
							</Link>
						</li>
						<li className={s.icon}>
							<Link
								href='http://www.facebook.com'
								target='_blank'>
								<span className={s.tooltip}>FaceBook</span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									className={`fill-current ${s.facebook}`}>
									<path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z'></path>
								</svg>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
			<p className='text-center mt-4'>&copy; 2024 Elzar&apos;s</p>
		</footer>
	);
};

export default Footer;
