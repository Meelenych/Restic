import Layout from '../components/Layout';
import { useState } from 'react';
import bgImgDeliverey from '../assets/images/Rocket.webp';

const Delivery = () => {
	const [formData, setFormData] = useState({
		first: '',
		last: '',
		phone: '',
		email: '',
		street: '',
		city: '',
		state: '',
		zip: '',
		date: '',
		time: '',
		instructions: '',
		paymentMethod: 'cash', // Default payment method
		cardNumber: '',
		expiryDate: '',
		cvv: '',
	});

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
		console.log('formData', formData);
	};

	const handleSubmit = e => {
		e.preventDefault();
		// Handle form submission logic here (e.g., send data to server)
		console.log(formData);
		// Clear form fields after submission (if needed)
		// setFormData({ ...initialState });
	};

	return (
		<Layout>
			<div
				style={{ backgroundImage: `url(${bgImgDeliverey.src})` }}
				className='-mt-20 bg-cover bg-center w-full '>
				<div
					className='h-dvh p-1 md:p-8 lg:p-16 flex
			flex-col items-start justify-center'>
					<div className='container mx-auto p-4'>
						<h1 className='text-2xl font-bold mb-4'>Food Delivery Order Form</h1>
						<form
							onSubmit={handleSubmit}
							className='space-y-4 text-emerald-300'>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
								{/* Personal */}
								<div className='flex flex-wrap border border-emerald-200 rounded-xl p-3 w-full mb-3 backdrop-blur-sm bg-black/30'>
									<p className='w-full mb-3 font-semibold'>Personal information</p>
									{/* First name */}
									<div className='w-full md:w-1/2 px-2 mb-4'>
										<label
											htmlFor='first'
											className='block text-sm font-medium text-purple-500'>
											First name
										</label>
										<input
											type='text'
											id='first'
											name='first'
											value={formData.first}
											onChange={handleChange}
											required
											className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50'
										/>
									</div>
									{/* Last name */}
									<div className='w-full md:w-1/2 px-2 mb-4'>
										<label
											htmlFor='last'
											className='block text-sm font-medium text-purple-500'>
											Last name
										</label>
										<input
											type='text'
											id='last'
											name='last'
											value={formData.last}
											onChange={handleChange}
											required
											className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50'
										/>
									</div>
									{/* Phone */}
									<div className='w-full md:w-1/2 px-2 mb-4'>
										<label
											htmlFor='phone'
											className='block text-sm font-medium text-purple-500'>
											Phone Number
										</label>
										<input
											type='tel'
											id='phone'
											name='phone'
											value={formData.phone}
											onChange={handleChange}
											required
											className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50'
										/>
									</div>
									{/* Email */}
									<div className='w-full md:w-1/2 px-2 mb-4'>
										<label
											htmlFor='email'
											className='block text-sm font-medium text-purple-500'>
											Email
										</label>
										<input
											type='email'
											id='email'
											name='email'
											value={formData.email}
											onChange={handleChange}
											required
											className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50'
										/>
									</div>
								</div>
								{/* Address */}
								<div className='flex flex-wrap border border-emerald-200 rounded-xl p-3 w-full mb-3 backdrop-blur-sm bg-black/30'>
									<p className='w-full mb-3 font-semibold'>Address</p>
									{/* Street */}
									<div className='w-full md:w-1/2 px-2 mb-4'>
										<label
											htmlFor='street'
											className='block text-sm font-medium text-purple-500'>
											Street
										</label>
										<input
											type='street'
											id='street'
											name='street'
											value={formData.street}
											onChange={handleChange}
											required
											className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50'
										/>
									</div>
									{/* City */}
									<div className='w-full md:w-1/2 px-2 mb-4'>
										<label
											htmlFor='city'
											className='block text-sm font-medium text-purple-500'>
											City
										</label>
										<input
											type='city'
											id='city'
											name='city'
											value={formData.city}
											onChange={handleChange}
											required
											className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50'
										/>
									</div>
									{/* State */}
									<div className='w-full md:w-1/2 px-2 mb-4'>
										<label
											htmlFor='state'
											className='block text-sm font-medium text-purple-500'>
											State
										</label>
										<input
											type='state'
											id='state'
											name='state'
											value={formData.state}
											onChange={handleChange}
											required
											className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50'
										/>
									</div>
									{/* ZIP Code */}
									<div className='w-full md:w-1/2 px-2 mb-4'>
										<label
											htmlFor='zip'
											className='block text-sm font-medium text-purple-500'>
											ZIP Code
										</label>
										<input
											type='zip'
											id='zip'
											name='zip'
											value={formData.zip}
											onChange={handleChange}
											required
											className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50'
										/>
									</div>
								</div>
								{/* Time and date */}
								<div className='flex flex-wrap border border-emerald-200 rounded-xl p-3 w-full mb-3 backdrop-blur-sm bg-black/30'>
									<p className='w-full mb-3 font-semibold'>Time and date</p>
									{/* Date */}
									<div className='w-full md:w-1/2 px-2 mb-4'>
										<label
											htmlFor='date'
											className='block text-sm font-medium text-purple-500'>
											Date
										</label>
										<input
											type='date'
											id='date'
											name='date'
											value={formData.date}
											onChange={handleChange}
											required
											className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50'
										/>
									</div>
									{/* Time */}
									<div className='w-full md:w-1/2 px-2 mb-4'>
										<label
											htmlFor='time'
											className='block text-sm font-medium text-purple-500'>
											Time
										</label>
										<input
											type='time'
											id='time'
											name='time'
											value={formData.time}
											onChange={handleChange}
											required
											className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50'
										/>
									</div>
									{/* Instructions */}
									<div className='w-full px-2 mb-4'>
										<label
											htmlFor='instructions'
											className='block text-sm font-medium text-purple-500'>
											Special instructions
										</label>
										<textarea
											id='instructions'
											name='instructions'
											value={formData.instructions}
											onChange={handleChange}
											className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50'
										/>
									</div>
								</div>
								{/* Payment */}
								<div className='flex flex-wrap border border-emerald-200 rounded-xl p-3 w-full mb-3 backdrop-blur-sm bg-black/30'>
									<p className='w-full mb-3 font-semibold'>Personal information</p>
									{/* Payment method */}
									<div className='w-full md:w-1/2 px-2 mb-4'>
										<label
											htmlFor='paymentMethod'
											className='block text-sm font-medium text-purple-500'>
											Payment method
										</label>
										<select
											value={formData.paymentMethod}
											onChange={handleChange}
											className='h-6 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50'>
											<option
												disabled
												selected>
												Select payment method
											</option>
											<option>Card</option>
											<option>Paypal</option>
											<option>Bank account</option>
										</select>
									</div>
									{/* Card number */}
									<div className='w-full md:w-1/2 px-2 mb-4'>
										<label
											htmlFor='cardNumber'
											className='block text-sm font-medium text-purple-500'>
											Card number
										</label>
										<input
											type='text'
											id='cardNumber'
											name='cardNumber'
											value={formData.cardNumber}
											onChange={handleChange}
											required
											className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50'
										/>
									</div>
									{/* Expiry date */}
									<div className='w-full md:w-1/2 px-2 mb-4'>
										<label
											htmlFor='expiryDate'
											className='block text-sm font-medium text-purple-500'>
											Expiry date
										</label>
										<input
											type='date'
											id='expiryDate'
											name='expiryDate'
											value={formData.expiryDate}
											onChange={handleChange}
											required
											className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50'
										/>
									</div>
									{/* CVV */}
									<div className='w-full md:w-1/2 px-2 mb-4'>
										<label
											htmlFor='cvv'
											className='block text-sm font-medium text-purple-500'>
											CVV
										</label>
										<input
											type='number'
											id='cvv'
											name='cvv'
											value={formData.cvv}
											onChange={handleChange}
											required
											className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50'
										/>
									</div>
								</div>
							</div>

							<button
								type='submit'
								className='bg-indigo-500 text-white py-2 px-4 rounded-xl w-full hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition ease-in duration-300'>
								Submit Order
							</button>
						</form>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Delivery;
