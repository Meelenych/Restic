import React from 'react';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import Link from 'next/link';

const BookConfirmation = () => {
	const router = useRouter();
	const { first, last, phone, email, date, time, guests, instructions } =
		router.query;

	return (
		<Layout>
			<h1>
				Your reservation is confirmed, please refer to the information below:
			</h1>
			<p>
				Name: {first} {last}
			</p>
			<p>Phone: {phone}</p>
			<p>Email: {email}</p>
			<p>Date: {date}</p>
			<p>Time: {time}</p>
			<p>Guests: {guests}</p>
			<p>Special Instructions: {instructions}</p>

			<Link
				href='/'
				className='hover:animate-pulse-glow bg-red-500 text-white text-center py-2 px-4 rounded-xl w-full md:w-96 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition ease-in duration-300'>
				Return to Homepage
			</Link>
		</Layout>
	);
};

export default BookConfirmation;
