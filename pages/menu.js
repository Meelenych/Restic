import Layout from '../components/Layout';
import { useState, useEffect } from 'react';
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
									<h2 className='card-title'>
										Item {dish.id}: {dish.title}
									</h2>
									<p>Description: {dish.description}</p>
									<div className='card-actions justify-end'>
										<button className='btn btn-primary'>Order now!</button>
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
