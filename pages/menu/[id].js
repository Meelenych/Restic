import Layout from '../../components/Layout';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

export const getStaticPaths = async () => {
	const res = await axios.get('http://localhost:3001/dishes');
	const dishes = res.data;

	const paths = dishes.map(dish => ({
		params: { id: dish.id.toString() },
	}));

	return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
	const res = await axios.get(`http://localhost:3001/dishes/${params.id}`);
	const dish = res.data;

	return { props: { dish } };
};

const MenuItem = ({ dish }) => {
	return (
		<Layout>
			<div className='p-5'>
				<Link
					href={`/menu`}
					className='hover:text-amber-500 py-2 w-full md:w-96 md:mr-4 mb-4 md:mb-0 focus:outline-none hover:underline transition ease-in duration-300'>
					<div className='flex'>
						<p>🡰</p>
						<p>Back to menu</p>
					</div>
				</Link>
				<h1 className='text-2xl font-bold mb-4'>{dish.title}</h1>
				<Image
					src={dish.image}
					alt={dish.title}
					width={400}
					height={300}
					unoptimized
				/>
				<p className='mt-4'>{dish.description}</p>
				<p className='mt-2 font-bold'>Price: ${dish.price}</p>
				<p className='mt-2'>Category: {dish.category}</p>
				<button className='hover:animate-pulse-glow bg-indigo-500 text-white py-2 px-4 rounded-xl w-full md:w-96 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition ease-in duration-300'>
					Order now!
				</button>
			</div>
		</Layout>
	);
};

export default MenuItem;
