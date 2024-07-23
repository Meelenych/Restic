import Layout from '../../components/Layout';
import axios from 'axios';
import Image from 'next/image';

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
			</div>
		</Layout>
	);
};

export default MenuItem;
