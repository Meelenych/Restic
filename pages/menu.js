import Layout from '../components/Layout';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Image from 'next/image';

const Menu = () => {
	const initialDishes = [];
	const [dishes, setDishes] = useState(initialDishes);

	useEffect(() => {
		axios
			.get('http://localhost:3001/dishes')
			.then(res => {
				setDishes(res.data);
			})
			.catch(error => {
				console.error('Error fetching dishes:', error);
			});
	}, []);

	return (
		<Layout>
			<div className='p-5'>
				<h1 className='mb-5 text-xl font-semibold'>Elzar's Fine Cuisine Menu</h1>
				<ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
					{dishes.map(dish => (
						<li key={dish.id}>
							<div className='card glass '>
								<figure>
									<Image
										src={dish.image}
										alt={`Image of ${dish.title}`}
										width={500}
										height={400}
										unoptimized
									/>
								</figure>
								<div className='card-body'>
									<h2 className='card-title line-clamp-1'>
										Item {dish.id}: {dish.title}
									</h2>
									<p className='line-clamp-3'>Description: {dish.description}</p>
									<div className='w-full flex justify-between flex-col md:flex-row'>
										<Link
											href='/'
											className='text-center hover:animate-pulse-glow bg-amber-500 text-white py-2 px-4 rounded-xl w-full md:w-96 md:mr-4 mb-4 md:mb-0 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition ease-in duration-300'>
											Learn more
										</Link>
										<button className='hover:animate-pulse-glow bg-indigo-500 text-white py-2 px-4 rounded-xl w-full md:w-96 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition ease-in duration-300'>
											Order now!
										</button>
									</div>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</Layout>
	);
};

export default Menu;
