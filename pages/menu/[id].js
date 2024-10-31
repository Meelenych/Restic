import Layout from '../../components/Layout';
import supabase from '../../db';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/cart/cartSlice';
import toast from 'react-hot-toast';

const MenuItem = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const { id } = router.query;
	const [dish, setDish] = useState(null);
	const [loading, setLoading] = useState(true);
	const loggedIn = useSelector(state => state.auth.loggedIn);

	const handleAddToCart = () => {
		toast.success(`${dish.title} added to cart`);
		dispatch(
			addItem({
				id: dish.id,
				title: dish.title,
				price: dish.price,
				image: dish.image,
				description: dish.description,
				category: dish.category,
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

				<div className='rounded-2xl bg-gradient-to-tl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
					{/* Menu item image */}
					<Image
						src={dish.image}
						alt={dish.title}
						width={400}
						height={400}
						unoptimized
						className='w-full max-h-[600px] object-cover'
					/>
					{/* Menu item text info */}
					<div className='card-body lg:col-span-2 col-span-1'>
						<h2 className='card-title'>{dish.title}</h2>
						<p className='mt-4'>{dish.description}</p>
						<p className='mt-2 font-bold'>Price: ${dish.price}</p>
						<p className='mt-2'>Category: {dish.category}</p>
						{/* Order / Log in button */}
						<div className='card-actions justify-end'>
							{loggedIn ? (
								<button
									onClick={() => handleAddToCart(dish)}
									className='hover:animate-pulse-glow-indigo bg-indigo-500 text-white py-2 px-4 rounded-xl w-full md:w-96 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition ease-in duration-300'>
									Order now!
								</button>
							) : (
								<div className='hover:animate-pulse-glow-indigo overflow_div btn border-none rounded-xl hover:bg-indigo-500 bg-indigo-500 text-white w-full md:w-96 transition ease-in duration-300'>
									Order now
									<div className='overlay_div'>
										<Link
											href='/login'
											className='btn border-none rounded-xl bg-indigo-500 w-full hover:bg-indigo-500 text-white '>
											Log in first
										</Link>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default MenuItem;
