import Layout from '../components/Layout';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import supabase from '../db';
import { addItem } from '../redux/cart/cartSlice';
import toast from 'react-hot-toast';
import { jwtDecode } from 'jwt-decode';
import { useSelector, useDispatch } from 'react-redux';

const Menu = () => {
	const [dishes, setDishes] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const dispatch = useDispatch();
	const loggedIn = useSelector(state => state.auth.loggedIn);

	const handleAddToCart = async dish => {
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
		const token = localStorage.getItem('token');
		const user = jwtDecode(token);
		console.log('user', user);
		console.log('User ID:', user.id);
		const response = await fetch('/api/cart/add', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				user_id: user.id,
				menu_item_id: dish.id,
				quantity: 1,
			}),
		});

		const data = await response.json();
		console.log(data);
	};

	useEffect(() => {
		const fetchDishes = async () => {
			try {
				setLoading(true);
				const { data, error } = await supabase.from('menu').select('*');
				if (error) throw error;
				setDishes(data);
			} catch (error) {
				console.error('Error fetching dishes:', error);
				setError('Failed to fetch dishes');
			} finally {
				setLoading(false);
			}
		};
		fetchDishes();
	}, []);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>{error}</p>;

	return (
		<Layout>
			<div className='p-5'>
				<h1 className='mb-5 text-xl font-semibold'>
					Elzar&apos;s Fine Cuisine Menu
				</h1>
				<ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5'>
					{dishes.length > 0 ? (
						dishes.map(dish => (
							<li key={dish.id}>
								<div className='card glass'>
									<figure>
										<Image
											src={dish.image}
											alt={`Image of ${dish.title}`}
											width={500}
											height={400}
											unoptimized
										/>
									</figure>
									<div className='card-body p-3'>
										<h2 className='card-title line-clamp-1'>{dish.title}</h2>
										<p className='line-clamp-2'>{dish.description}</p>
										<div className='w-full grid grid-cols-1 md:grid-cols-2'>
											<Link
												href={`/menu/${dish.id}`}
												className='hover:text-amber-500 py-2 w-full md:w-96 md:mr-4 mb-4 md:mb-0 focus:outline-none hover:underline transition ease-in duration-300'>
												Learn more...
											</Link>
											{loggedIn ? (
												<button
													onClick={() => handleAddToCart(dish)}
													className='hover:animate-pulse-glow-indigo bg-indigo-500 text-white py-2 px-4 rounded-xl w-full md:w-96 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition ease-in duration-300'>
													Order now!
												</button>
											) : (
												<div className='hover:animate-pulse-glow-indigo overflow_div btn border-none rounded-xl hover:bg-indigo-500 bg-indigo-500 text-white w-full transition ease-in duration-300'>
													Order now
													<div className='overlay_div'>
														<Link
															href='/login'
															className='btn border-none rounded-xl bg-indigo-500 hover:bg-indigo-500 text-white '>
															Log in first
														</Link>
													</div>
												</div>
											)}
										</div>
									</div>
								</div>
							</li>
						))
					) : (
						<p>No dishes available</p>
					)}
				</ul>
			</div>
		</Layout>
	);
};

export default Menu;
