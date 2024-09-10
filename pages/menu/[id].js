import Layout from '../../components/Layout';
import supabase from '../../db';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cart/cartSlice';

const MenuItem = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const { id } = router.query;
	const [dish, setDish] = useState(null);
	const [loading, setLoading] = useState(true);

	const handleAddToCart = () => {
		console.log('ordered from id page');
		dispatch(
			addItem({
				id: dish.id,
				title: dish.title,
				price: dish.price,
				image: dish.image,
				description: dish.description,
				quantity: 1,
			}),
		);
	};

	useEffect(() => {
		if (id) {
			const fetchDish = async () => {
				try {
					const { data, error } = await supabase
						.from('menu')
						.select('*')
						.eq('id', id)
						.single();
					if (error) {
						console.error('Error fetching dish:', error);
					} else {
						setDish(data);
					}
				} catch (err) {
					console.error('Error fetching dish:', err);
				} finally {
					setLoading(false);
				}
			};
			fetchDish();
		}
	}, [id]);

	if (loading) return <p>Loading...</p>;
	if (!dish) return <p>Dish not found</p>;

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
				<button
					onClick={handleAddToCart}
					className='hover:animate-pulse-glow bg-indigo-500 text-white py-2 px-4 rounded-xl w-full md:w-96 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition ease-in duration-300'>
					Order now!
				</button>
			</div>
		</Layout>
	);
};

export default MenuItem;
