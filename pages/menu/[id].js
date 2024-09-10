import Layout from '../../components/Layout';
import supabase from '../../db';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const getItemId = () => {
	const router = useRouter();
	console.log(router);
	const { id } = router.query;
	console.log(id);
	return id;
};

const MenuItem = ({ dish }) => {
	const res = supabase.from('menu').select('*');
	console.log(res);
	const dishes = res.data;

	const id = getItemId();

	const resOne = supabase.from('menu').select('*').eq('id', id).single();
	const dishOne = resOne.data;
	console.log('resOne', resOne);
	console.log('dishOne', dishOne);

	if (!dish) {
		return <p>Dish not found</p>;
	}

	return (
		<p>{dish}</p>
		// <Layout>
		// 	<div className='p-5'>
		// 		<Link
		// 			href={`/menu`}
		// 			className='hover:text-amber-500 py-2 w-full md:w-96 md:mr-4 mb-4 md:mb-0 focus:outline-none hover:underline transition ease-in duration-300'>
		// 			<div className='flex'>
		// 				<p>🡰</p>
		// 				<p>Back to menu</p>
		// 			</div>
		// 		</Link>
		// 		<h1 className='text-2xl font-bold mb-4'>{dish.title}</h1>
		// 		<Image
		// 			src={dish.image}
		// 			alt={dish.title}
		// 			width={400}
		// 			height={400}
		// 			unoptimized
		// 			className='rounded-lg'
		// 		/>
		// 		<p className='mt-4'>{dish.description}</p>
		// 		<p className='mt-2 font-bold'>Price: ${dish.price}</p>
		// 		<p className='mt-2'>Category: {dish.category}</p>
		// 		<button className='hover:animate-pulse-glow bg-indigo-500 text-white py-2 px-4 rounded-xl w-full md:w-96 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition ease-in duration-300'>
		// 			Order now!
		// 		</button>
		// 	</div>
		// </Layout>
	);
};

export default MenuItem;
