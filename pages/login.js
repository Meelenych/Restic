import Layout from '../components/Layout';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Login = () => {
	const initialState = {
		login: '',
		password: '',
	};

	const [formData, setFormData] = useState(initialState);
	const router = useRouter();

	const { login, password } = formData;

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
			pathname: '/',
			query: formData,
		});
	};

	const clearForm = () => {
		setFormData(initialState);
	};
	return (
		<Layout>
			<div className='p-5 grid grid-cols-1 md:grid-cols-2 w-full'>
				<div className='flex items-center justify-center md:justify-end'>
					<Image
						className='hidden md:block animate-jumpOut'
						src={'webp/Fry2.webp'}
						alt={``}
						width={300}
						height={400}
						unoptimized
					/>
				</div>
				<div
					className='p-1 md:p-8 lg:p-16 flex
          flex-col items-center md:items-start justify-start'>
					<div className='w-full md:w-94 xl:w-96'>
						<h1 className='text-2xl font-bold mb-4 text-indigo-600'>Log in here</h1>
						<form
							id='booking-form'
							onSubmit={handleSubmit}
							className='space-y-4 text-emerald-300'>
							<div className='grid grid-cols-1'>
								{/* Login */}
								<div className='flex flex-wrap border border-emerald-200 rounded-xl p-3 w-full mb-3 backdrop-blur-sm bg-black/30'>
									<p className='w-full mb-3 font-semibold'>Please log in</p>
									{/*Login */}
									<div className='w-full px-2 mb-4'>
										<label
											htmlFor='login'
											className='block text-sm font-medium text-purple-300'>
											Login
										</label>
										<input
											type='text'
											id='login'
											name='login'
											value={formData.login}
											onChange={handleChange}
											required
											className='px-2 py-1 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50'
										/>
									</div>
									{/* Pssword */}
									<div className='w-full px-2 mb-4'>
										<label
											htmlFor='password'
											className='block text-sm font-medium text-purple-300'>
											Password
										</label>
										<input
											type='password'
											id='password'
											name='password'
											value={formData.password}
											onChange={handleChange}
											required
											className='px-2 py-1 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50'
										/>
									</div>
								</div>
							</div>
							<div className='grid grid-cols-1'>
								<button
									type='button'
									onClick={() => clearForm()}
									className='hover:animate-pulse-glow-amber bg-amber-500 text-white py-2 px-4 rounded-xl w-full  xl:w-96 mb-4 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition ease-in duration-300'>
									Clear form
								</button>
								<button
									type='submit'
									className='hover:animate-pulse-glow-indigo bg-indigo-500 text-white py-2 px-4 rounded-xl w-full xl:w-96 mb-4 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition ease-in duration-300'>
									Log in
								</button>
								<Link
									href='/register'
									className='hover:animate-pulse-glow-emerald bg-emerald-600 text-white text-center py-2 px-4 rounded-xl w-full xl:w-96 mb-4 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition ease-in duration-300'>
									I have no account / Register
								</Link>
								<Link
									href='/'
									className='hover:animate-pulse-glow-red bg-red-500 text-white text-center py-2 px-4 rounded-xl w-full xl:w-96 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition ease-in duration-300'>
									Cancel
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Login;
