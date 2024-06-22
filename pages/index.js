import Layout from '../components/Layout';
import Head from 'next/head';

const Home = () => {
	return (
		<>
			<Head></Head>
			<Layout>
				<h1 className='text-6xl font-bold'>
					Welcome to <span className='text-emerald-500'>Elzar's Fine Cuisine</span>
				</h1>
				<p>
					"Indulge in Culinary Delights: Where great Neptunian and Earthican food are
					offered at ridiculous prices"
				</p>
			</Layout>
		</>
	);
};

export default Home;
