import Layout from '../components/Layout';
import Head from 'next/head';
import bgImg from '../assets/images/ElzarHD.webp';
import Link from 'next/link';

const Home = () => {
	return (
		<>
			<Head></Head>
			<Layout>
				<div
					style={{ backgroundImage: `url(${bgImg.src})` }}
					className='-mt-20 bg-cover bg-center w-full h-dvh p-1 md:p-8 lg:p-16 flex flex-col items-start justify-center'>
					<div className='p-4 backdrop-blur-sm bg-black/30 mb-4'>
						<h1 className='text-6xl font-bold'>
							<span className='text-yellow-500'>Welcome to</span>{' '}
							<span className='text-emerald-500'>Elzar's Fine Cuisine</span>
						</h1>
						<p className='text-2xl text-violet-500 script-italics'>
							"Indulge in Culinary Delights: Where great Neptunian and Earthican food
							are offered at ridiculous prices"
						</p>
					</div>
					<div className='w-full md:w-1/2 lg:w-1/3 grid grid-cols-2 gap-4'>
						<Link
							href={'/menu'}
							className='bg-pink-900 text-white text-center py-2 px-4 rounded-xl w-full hover:bg-pink-950 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition ease-in duration-300 mr-4'>
							See our menu
						</Link>
						<Link
							href={'/book'}
							className='bg-indigo-500 text-white text-center py-2 px-4 rounded-xl w-full hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition ease-in duration-300'>
							Book a table
						</Link>
					</div>
				</div>
			</Layout>
		</>
	);
};

export default Home;
