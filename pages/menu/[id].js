import Layout from '../../components/Layout';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const getStaticPaths = async () => {
	try {
		const res = await axios.get(`${apiUrl}/dishes`);
		const dishes = res.data;

		const paths = dishes.map(dish => ({
			params: { id: dish.id.toString() },
		}));

		return { paths, fallback: false };
	} catch (error) {
		console.error('Error fetching dishes in getStaticPaths:', error);
		return { paths: [], fallback: false }; // Handle errors by returning empty paths
	}
};

export const getStaticProps = async ({ params }) => {
	try {
		const res = await axios.get(`${apiUrl}/dishes/${params.id}`);
		const dish = res.data;

		return { props: { dish } };
	} catch (error) {
		console.error('Error fetching dish in getStaticProps:', error);
		return { props: { dish: null } }; // Handle errors by returning null dish
	}
};

const MenuItem = ({ dish }) => {
	if (!dish) {
		return <p>Dish not found</p>; // Handle case where dish data is not available
	}

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
					height={400}
					unoptimized
					className='rounded-lg'
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
