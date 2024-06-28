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
		paymentMethod: 'cash',
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
	};

	const handleSubmit = e => {
		e.preventDefault();
		// Handle form submission logic here (e.g., send data to server)
		console.log('formData', formData);
		// Clear form fields after submission (if needed)
		// setFormData({ ...initialState });
	};

	return (
		<Layout>
			<div
				style={{ backgroundImage: `url(${bgImgDeliverey.src})` }}
				className='min-h-svh bg-cover bg-center w-full overflow-y-auto'>
				<div
					className='p-1 md:p-8 lg:p-16 flex
          flex-col items-start justify-start'>
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
											className='block text-sm font-medium text-purple-300'>
											First name
										</label>
										<input
											type='text'
											id='first'
											name='first'
											value={formData.first}
											onChange={handleChange}
											required
											className='px-2 py-1 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50'
										/>
									</div>
									{/* Last name */}
									<div className='w-full md:w-1/2 px-2 mb-4'>
										<label
											htmlFor='last'
											className='block text-sm font-medium text-purple-300'>
											Last name
										</label>
										<input
											type='text'
											id='last'
											name='last'
											value={formData.last}
											onChange={handleChange}
											required
											className='px-2 py-1 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50'
										/>
									</div>
									{/* Phone */}
									<div className='w-full md:w-1/2 px-2 mb-4'>
										<label
											htmlFor='phone'
											className='block text-sm font-medium text-purple-300'>
											Phone Number
										</label>
										<input
											type='tel'
											id='phone'
											name='phone'
											value={formData.phone}
											onChange={handleChange}
											required
											className='px-2 py-1 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50'
										/>
									</div>
									{/* Email */}
									<div className='w-full md:w-1/2 px-2 mb-4'>
										<label
											htmlFor='email'
											className='block text-sm font-medium text-purple-300'>
											Email
										</label>
										<input
											type='email'
											id='email'
											name='email'
											value={formData.email}
											onChange={handleChange}
											required
											className='px-2 py-1 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50'
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
											className='block text-sm font-medium text-purple-300'>
											Street
										</label>
										<input
											type='text'
											id='street'
											name='street'
											value={formData.street}
											onChange={handleChange}
											required
											className='px-2 py-1 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50'
										/>
									</div>
									{/* City */}
									<div className='w-full md:w-1/2 px-2 mb-4'>
										<label
											htmlFor='city'
											className='block text-sm font-medium text-purple-300'>
											City
										</label>
										<input
											type='text'
											id='city'
											name='city'
											value={formData.city}
											onChange={handleChange}
											required
											className='px-2 py-1 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50'
										/>
									</div>
									{/* State */}
									<div className='w-full md:w-1/2 px-2 mb-4'>
										<label
											htmlFor='state'
											className='block text-sm font-medium text-purple-300'>
											State
										</label>
										<input
											type='text'
											id='state'
											name='state'
											value={formData.state}
											onChange={handleChange}
											required
											className='px-2 py-1 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50'
										/>
									</div>
									{/* ZIP Code */}
									<div className='w-full md:w-1/2 px-2 mb-4'>
										<label
											htmlFor='zip'
											className='block text-sm font-medium text-purple-300'>
											ZIP Code
										</label>
										<input
											type='text'
											id='zip'
											name='zip'
											value={formData.zip}
											onChange={handleChange}
											required
											className='px-2 py-1 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50'
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
											className='block text-sm font-medium text-purple-300'>
											Date
										</label>
										<input
											type='date'
											id='date'
											name='date'
											value={formData.date}
											onChange={handleChange}
											required
											className='px-2 py-1 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50'
										/>
									</div>
									{/* Time */}
									<div className='w-full md:w-1/2 px-2 mb-4'>
										<label
											htmlFor='time'
											className='block text-sm font-medium text-purple-300'>
											Time
										</label>
										<input
											type='time'
											id='time'
											name='time'
											value={formData.time}
											onChange={handleChange}
											required
											className='px-2 py-1 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50'
										/>
									</div>
									{/* Instructions */}
									<div className='w-full px-2 mb-4'>
										<label
											htmlFor='instructions'
											className='block text-sm font-medium text-purple-300'>
											Special instructions
										</label>
										<textarea
											id='instructions'
											name='instructions'
											value={formData.instructions}
											onChange={handleChange}
											className='px-2 py-1 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50'
										/>
									</div>
								</div>
								{/* Payment */}
								<div className='flex flex-wrap border border-emerald-200 rounded-xl p-3 w-full mb-3 backdrop-blur-sm bg-black/30'>
									<p className='w-full mb-3 font-semibold'>Payment information</p>
									{/* Payment method */}
									<div className='w-full md:w-1/2 px-2 mb-4'>
										<label
											htmlFor='paymentMethod'
											className='block text-sm font-medium text-purple-300'>
											Payment method
										</label>
										<select
											value={formData.paymentMethod}
											name='paymentMethod'
											onChange={handleChange}
											className='px-2 py-1 h-8 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50'>
											<option
												value=''
												disabled>
												Select payment method
											</option>
											<option value='Card'>Card</option>
											<option value='Paypal'>Paypal</option>
											<option value='Bank account'>Bank account</option>
										</select>
									</div>
									{/* Card number */}
									<div className='w-full md:w-1/2 px-2 mb-4'>
										<label
											htmlFor='cardNumber'
											className='block text-sm font-medium text-purple-300'>
											Card number
										</label>
										<input
											type='number'
											id='cardNumber'
											name='cardNumber'
											maxLength='16'
											value={formData.cardNumber}
											onChange={handleChange}
											required
											className='px-2 py-1 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50'
										/>
									</div>
									{/* Expiry date */}
									<div className='w-full md:w-1/2 px-2 mb-4'>
										<label
											htmlFor='expiryDate'
											className='block text-sm font-medium text-purple-300'>
											Expiry date
										</label>
										<input
											type='date'
											id='expiryDate'
											name='expiryDate'
											value={formData.expiryDate}
											onChange={handleChange}
											required
											className='px-2 py-1 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50'
										/>
									</div>
									{/* CVV */}
									<div className='w-full md:w-1/2 px-2 mb-4'>
										<label
											htmlFor='cvv'
											className='block text-sm font-medium text-purple-300'>
											CVV
										</label>
										<input
											type='number'
											id='cvv'
											name='cvv'
											maxLength='3'
											value={formData.cvv}
											onChange={handleChange}
											required
											className='px-2 py-1 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50'
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
