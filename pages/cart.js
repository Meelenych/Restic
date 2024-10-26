import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../components/Layout';
import { clearCart } from '../redux/cart/cartSlice';
import withAuth from '../components/hoc/withAuth';

const Cart = () => {
	// Get the cart items from the Redux store
	const cartItems = useSelector(state => state.cart.items);
	console.log('cartItems', cartItems);
	const dispatch = useDispatch();

	const emptyCart = () => {
		document.getElementById('empty_cart_modal').showModal();
		// dispatch(clearCart());
	};

	const showModal = () => {
		document.getElementById('booking_modal').showModal();
	};

	const closeModal = () => {
		document.getElementById('booking_modal').close();
	};

	return (
		<Layout>
			<div className='overflow-x-auto p-1 md:p-8 lg:p-16'>
				{cartItems?.length === 0 ? (
					<p>Your cart is empty.</p>
				) : (
					<>
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
								{cartItems?.map(item => (
									<tr key={item.id}>
										<td>
											<div className='flex items-start gap-3 flex-col md:flex-row'>
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
											?.reduce((acc, item) => acc + item.price * item.quantity, 0)
											.toFixed(2)}
									</th>
								</tr>
							</tfoot>
						</table>
						<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
							<button
								type='button'
								onClick={showModal}
								className='hover:animate-pulse-glow-indigo bg-indigo-500 text-white py-2 px-4 rounded-xl w-full  md:w-60 lg:w-full md:mr-4 mb-4 md:mb-0 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition ease-in duration-300'>
								Confirm order
							</button>
							<button
								type='button'
								onClick={() => emptyCart()}
								className='hover:animate-pulse-glow-amber bg-amber-500 text-white py-2 px-4 rounded-xl w-full  md:w-60 lg:w-full md:mr-4 mb-4 md:mb-0 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition ease-in duration-300'>
								Empty cart
							</button>
							<Link
								href='/'
								className='hover:animate-pulse-glow-red bg-red-500 text-white text-center py-2 px-4 rounded-xl w-full  md:w-60 lg:w-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition ease-in duration-300'>
								Cancel
							</Link>
						</div>
						{/* Modal - confirm order */}
						<dialog
							id='booking_modal'
							className='modal'>
							<div className='modal-box'>
								<h3 className='font-bold text-lg'>Confirm your order?</h3>
								<p className='py-4'>Please confirm your order details.</p>
								<table className='table table-zebra-zebra table-xs'>
									<tbody>
										{cartItems?.map(item => (
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
															<div className='font-bold line-clamp-1'>{item.title}</div>
															<div className='text-sm opacity-50'>{item.category}</div>
														</div>
													</div>
												</td>
												<td className='text-right px-5'>{item.quantity}</td>
												<td className='text-right px-5'>${item.price.toFixed(2)}</td>
												<td className='text-right px-5'>
													${(item.price * item.quantity).toFixed(2)}
												</td>
											</tr>
										))}
									</tbody>
									<th></th>
									<th></th>
									<th>Total</th>
									<th>
										$
										{cartItems
											?.reduce((acc, item) => acc + item.price * item.quantity, 0)
											.toFixed(2)}
									</th>
								</table>
								<div className='modal-action'>
									<button
										type='submit'
										form='booking-form'
										className='hover:animate-pulse-glow-indigo bg-indigo-500 text-white py-2 px-4 rounded-xl w-full md:w-96 mr-4 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition ease-in duration-300'>
										Confirm
									</button>
									<button
										type='button'
										onClick={() => closeModal()}
										className='hover:animate-pulse-glow-red bg-red-500 text-white text-center py-2 px-4 rounded-xl w-full md:w-96 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition ease-in duration-300'>
										Cancel
									</button>
								</div>
							</div>
						</dialog>
						{/* Modal - confirm empty cart */}
						<dialog
							id='empty_cart_modal'
							className='modal'>
							<div className='modal-box'>
								<form method='dialog'></form>
								<h3 className='font-bold text-lg'>Are you sure?</h3>
								<p className='py-4'>
									Press <strong>Confirm</strong> to empty cart or <strong>Cancel</strong>{' '}
									to exit.
								</p>
								<div className='modal-action'>
									<button
										type='submit'
										form='booking-form'
										onClick={() => dispatch(clearCart())}
										className='hover:animate-pulse-glow-indigo bg-indigo-500 text-white py-2 px-4 rounded-xl w-full md:w-96 mr-4 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition ease-in duration-300'>
										Confirm
									</button>
									<button
										type='button'
										onClick={() => document.getElementById('empty_cart_modal').close()}
										className='hover:animate-pulse-glow-red bg-red-500 text-white text-center py-2 px-4 rounded-xl w-full md:w-96 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition ease-in duration-300'>
										Cancel
									</button>
								</div>
							</div>
						</dialog>
					</>
				)}
			</div>
		</Layout>
	);
};

export default withAuth(Cart);
