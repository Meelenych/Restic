import Layout from '../components/Layout';
import { useState } from 'react';
import bgImgDeliverey from '../assets/images/Rocket.webp';

const Delivery = () => {
	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		email: '',
		streetAddress: '',
		city: '',
		state: '',
		zipCode: '',
		deliveryDateTime: '',
		specialInstructions: '',
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
							<div className='flex flex-wrap '>
								<div className='flex flex-wrap border border-emerald-200 rounded-xl p-3 w-full mb-3 backdrop-blur-sm bg-black/30'>
									<p className='w-full mb-3 font-semibold'>Personal information</p>
									{/* First name */}
									<div className='w-full md:w-1/2 px-2 mb-4'>
										<label
											htmlFor='name'
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
								<div className='flex flex-wrap border border-emerald-200 rounded-xl p-3 w-full backdrop-blur-sm bg-black/30'>
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
							</div>

							{/* Add other fields similarly */}
							{/* Order Details:

Date & Time of Delivery:
Special Instructions:
Menu Selection (Please specify quantities):

Item 1:
Item 2:
Item 3:
...
Payment Information:

Payment Method (Cash on Delivery / Credit Card):
Credit Card Information (if applicable):
Card Number:
Expiry Date:
CVV: */}

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
