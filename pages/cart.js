import React from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import Layout from '../components/Layout';

const Cart = () => {
	// Get the cart items from the Redux store
	const cartItems = useSelector(state => state.cart.items);
	console.log('cartItems', cartItems);

	return (
		<Layout>
			<div className='overflow-x-auto'>
				{cartItems.length === 0 ? (
					<p>Your cart is empty.</p>
				) : (
					<table className='table'>
						{/* head */}
						<thead className='text-white text-md'>
							<tr>
								<th>Dish Title</th>
								<th className='hidden md:block'>Description</th>
								<th>Quantity</th>
								<th>Price</th>
								<th>Sum</th>
							</tr>
						</thead>
						<tbody>
							{cartItems.map(item => (
								<tr key={item.id}>
									<td>
										<div className='flex items-center gap-3 flex-col md:flex-row'>
											<div className='avatar'>
												<div className='mask mask-squircle h-12 w-12'>
													<Image
														src={item.image}
														alt={`Image of ${item.title}`}
														width={500}
														height={400}
														unoptimized
													/>
												</div>
											</div>
											<div>
												<div className='font-bold'>{item.title}</div>
												<div className='text-sm opacity-50'>{item.category}</div>
											</div>
										</div>
									</td>
									<td className='line-clamp-1 hidden md:block'>{item.description}</td>
									<td>{item.quantity}</td>
									<td>${item.price.toFixed(2)}</td>
									<td>${(item.price * item.quantity).toFixed(2)}</td>
								</tr>
							))}
						</tbody>
						{/* foot */}
						<tfoot className='text-white text-lg'>
							<tr>
								<th colSpan='2'></th>
								<th className='hidden md:block'></th>
								<th>Total</th>
								<th>
									$
									{cartItems
										.reduce((acc, item) => acc + item.price * item.quantity, 0)
										.toFixed(2)}
								</th>
							</tr>
						</tfoot>
					</table>
				)}
			</div>
		</Layout>
	);
};

export default Cart;
