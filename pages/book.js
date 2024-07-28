'use client';
import Layout from '../components/Layout';
import bgImgBook from '../assets/images/table.jpg';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Book = () => {
	const initialState = {
		first: '',
		last: '',
		phone: '',
		email: '',
		date: '',
		time: '',
		guests: '',
		instructions: '',
	};

	// Initialize form data with initial state
	const [formData, setFormData] = useState(initialState);
	const router = useRouter();

	const { first, last, phone, email, date, time, guests, instructions } =
		formData;

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
		clearForm();

		// Redirect to confirmation page with form data as query parameters
		router.push({
			pathname: '/book_confirmation',
			query: formData,
		});

		closeModal();
	};

	const clearForm = () => {
		setFormData(initialState);
	};

	const showModal = () => {
		document.getElementById('booking_modal').showModal();
	};

	const closeModal = () => {
		document.getElementById('booking_modal').close();
	};

	return (
		<Layout>
			<div
				style={{ backgroundImage: `url(${bgImgBook.src})` }}
				className='min-h-svh bg-cover bg-center w-full overflow-y-auto'>
				<div
					className='p-1 md:p-8 lg:p-16 flex
          flex-col items-start justify-start'>
					<div className='container mx-auto p-4'>
						<h1 className='text-2xl font-bold mb-4 text-indigo-600'>
							Book a table at our marvelous restaurant
						</h1>
						<form
							id='booking-form'
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
								{/* Time and date */}
								<div className='flex flex-wrap border border-emerald-200 rounded-xl p-3 w-full mb-3 backdrop-blur-sm bg-black/30'>
									<p className='w-full mb-3 font-semibold'>Time and date</p>
									{/* Date */}
									<div className='w-full md:w-1/3 px-2 mb-4'>
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
									<div className='w-full md:w-1/3 px-2 mb-4'>
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
									{/* Guests */}
									<div className='w-full md:w-1/3 px-2 mb-4'>
										<label
											htmlFor='guests'
											className='block text-sm font-medium text-purple-300'>
											Guests
										</label>
										<input
											type='number'
											id='guests'
											name='guests'
											min='1'
											max='30'
											value={formData.guests}
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
							</div>
							<div className='w-full flex justify-between flex-col md:flex-row'>
								<button
									type='button'
									onClick={() => clearForm()}
									className='hover:animate-pulse-glow-amber bg-amber-500 text-white py-2 px-4 rounded-xl w-full md:w-96 md:mr-4 mb-4 md:mb-0 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition ease-in duration-300'>
									Clear form
								</button>
								<button
									type='button'
									onClick={showModal}
									className='hover:animate-pulse-glow-indigo bg-indigo-500 text-white py-2 px-4 rounded-xl w-full md:w-96 md:mr-4 mb-4 md:mb-0 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition ease-in duration-300'>
									Book a table
								</button>
								<Link
									href='/'
									className='hover:animate-pulse-glow-red bg-red-500 text-white text-center py-2 px-4 rounded-xl w-full md:w-96 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition ease-in duration-300'>
									Cancel
								</Link>
							</div>
							{/* Modal */}
							<dialog
								id='booking_modal'
								className='modal'>
								<div className='modal-box'>
									<h3 className='font-bold text-lg'>Confirm your reservation?</h3>
									<p className='py-4'>Please confirm your reservation details.</p>
									<div>
										<p>
											Name: {first} {last}
										</p>
										<p>Phone: {phone}</p>
										<p>Email: {email}</p>
										<p>Date: {date}</p>
										<p>Time: {time}</p>
										<p>Guests: {guests}</p>
										<p>Special Instructions: {instructions}</p>
									</div>
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
						</form>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Book;
