import Layout from '../components/Layout';
import Head from 'next/head';
import bgImg from '../assets/images/ElzarHD.webp';

const Home = () => {
	return (
		<>
			<Head></Head>
			<Layout>
				<div
					style={{ backgroundImage: `url(${bgImg.src})` }}
					className='-mt-20 bg-cover bg-center w-full h-dvh p-1 md:p-8 lg:p-16 flex flex-col items-start justify-center'>
					<h1 className='text-6xl font-bold'>
						Welcome to <span className='text-emerald-500'>Elzar's Fine Cuisine</span>
					</h1>
					<p className='text-2xl text-violet-500 script-italics'>
						"Indulge in Culinary Delights: Where great Neptunian and Earthican food
						are offered at ridiculous prices"
					</p>
				</div>
			</Layout>
		</>
	);
};

export default Home;
