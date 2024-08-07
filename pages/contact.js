import Layout from '../components/Layout';
import GoogleMap from '../components/GoogleMap';
import IconSelector from '../helpers/IconSelector';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Contact = () => {
	const initialState = {
		first: '',
		last: '',
		email: '',
		message: '',
	};

	// Initialize form data with initial state
	const [formData, setFormData] = useState(initialState);
	const router = useRouter();

	const { first, last, email, subject, message } = formData;

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
			pathname: '/message_confirmation',
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
			<h1 className='text-2xl p-5'>Find us here</h1>
			<GoogleMap />
			<div className='grid grid-cols-1 md:grid-cols-2'>
				{/* Contact information */}
				<div className='grid grid-cols-1 md:grid-cols-2'>
					<div className='p-5'>
						<div className='flex mb-4'>
							<div className='mr-4'>
								<IconSelector icon='pin' />
							</div>
							<div>
								<p>Location:</p>
								<address>1250 Main St., Chicago, 60007 IL, USA</address>
							</div>
						</div>
						<div className='flex  mb-4'>
							<div className='mr-4'>
								<IconSelector icon='clock' />
							</div>
							<p>Open hours: Monday - Sunday: 12:00 PM - 11:00 PM</p>
						</div>
						<div className='flex  mb-4'>
							<div className='mr-4'>
								<IconSelector icon='phone' />
							</div>
							<p>
								Phone: <a href='tel:+1234567890'> (123) 456-7890</a>
							</p>
						</div>
						<div className='flex  mb-4'>
							<div className='mr-4'>
								<IconSelector icon='email' />
							</div>
							<p>
								Email: <a href='mailto:admin@example.com'>admin@example.com</a>
							</p>
						</div>
					</div>
					<div className='flex items-center justify-center'>
						<Image
							className='hidden md:block animate-jumpOut'
							src={'webp/AmyWong.webp'}
							alt={``}
							width={100}
							height={100}
							unoptimized
						/>
					</div>
				</div>
				{/* Message form */}
				<div className='p-5'>
					<form
						id='message-form'
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
								{/* Email */}
								<div className='w-full px-2 mb-4'>
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
							{/* Message*/}
							<div className='flex flex-wrap border border-emerald-200 rounded-xl p-3 w-full mb-3 backdrop-blur-sm bg-black/30'>
								<p className='w-full mb-3 font-semibold'>Your message here: </p>
								{/* Subject */}
								<div className='w-full px-2 mb-4'>
									<label
										htmlFor='subject'
										className='block text-sm font-medium text-purple-300'>
										Subject
									</label>
									<input
										type='text'
										id='subject'
										name='subject'
										value={formData.subject}
										onChange={handleChange}
										required
										className='px-2 py-1 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50'
									/>
								</div>
								{/* message */}
								<div className='w-full px-2 mb-4'>
									<label
										htmlFor='message'
										className='block text-sm font-medium text-purple-300'>
										Your message
									</label>
									<textarea
										id='message'
										name='message'
										value={formData.message}
										onChange={handleChange}
										className='px-2 py-1 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50'
									/>
								</div>
							</div>
						</div>
						{/* Buttons */}
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
								Send
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
								<h3 className='font-bold text-lg'>Confirm sending your message?</h3>
								<p className='py-4'>Please check your message.</p>
								<div>
									<p>
										Name: {first} {last}
									</p>
									<p>Email: {email}</p>
									<p>Subject: {subject}</p>
									<p>Message: {message}</p>
								</div>
								<div className='modal-action'>
									<button
										type='submit'
										form='message-form'
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
		</Layout>
	);
};

export default Contact;
