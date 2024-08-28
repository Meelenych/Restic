import Layout from '../components/Layout';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Image from 'next/image';

const Menu = () => {
	const apiUrl = process.env.NEXT_PUBLIC_API_URL || '/api';
	const [dishes, setDishes] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchDishes = async () => {
			try {
				setLoading(true);
				const res = await axios.get(`${apiUrl}/menu`);
				setDishes(res.data);
				console.log('menu dishes', res.data);
			} catch (error) {
				console.error('Error fetching dishes:', error);
				setError('Failed to fetch dishes');
			} finally {
				setLoading(false);
			}
		};
		fetchDishes();
	}, [apiUrl]);

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
										<div className='w-full flex justify-between flex-col md:flex-row'>
											<Link
												href={`/menu/${dish.id}`}
												className='hover:text-amber-500 py-2 w-full md:w-96 md:mr-4 mb-4 md:mb-0 focus:outline-none hover:underline transition ease-in duration-300'>
												Learn more...
											</Link>
											<button className='hover:animate-pulse-glow bg-indigo-500 text-white py-2 px-4 rounded-xl w-full md:w-96 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition ease-in duration-300'>
												Order now!
											</button>
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
