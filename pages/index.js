import Layout from '../components/Layout';
import Head from 'next/head';

const Home = () => {
	return (
		<>
			<Head></Head>
			<Layout>
				<h1 className='text-2xl font-bold'>Home Page</h1>
			</Layout>
		</>
	);
};

export default Home;
