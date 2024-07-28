import React from 'react';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import Link from 'next/link';

const BookConfirmation = () => {
	const router = useRouter();
	const { first, last, phone, email, date, time, guests, instructions } =
		router.query;

	// // Import necessary libraries
	// const sgMail = require('@sendgrid/mail');
	// sgMail.setApiKey(process.env.SENDGRID_API_KEY); // Set your SendGrid API key

	// // Function to send booking confirmation email
	// async function sendBookingConfirmationEmail(email, bookingDetails) {
	// 	const msg = {
	// 		to: email,
	// 		from: 'your@example.com', // Use your verified sender address
	// 		subject: 'Booking Confirmation',
	// 		html: `<p>Hello,</p>
	//          <p>Your booking has been confirmed with the following details:</p>
	//          <ul>
	//            <li>Name: ${bookingDetails.first} ${bookingDetails.last}</li>
	//            <li>Date: ${bookingDetails.date}</li>
	//            <li>Time: ${bookingDetails.time}</li>
	//            <li>Guests: ${bookingDetails.guests}</li>
	//            <li>Special Instructions: ${bookingDetails.instructions}</li>
	//          </ul>`,
	// 	};

	// 	try {
	// 		await sgMail.send(msg);
	// 		console.log('Email sent successfully');
	// 	} catch (error) {
	// 		console.error('Error sending email:', error.toString());
	// 	}
	// }

	// module.exports = { sendBookingConfirmationEmail };

	return (
		<Layout>
			<div className='p-5 flex flex-col items-center'>
				<h1 className='text-xl font-semibold'>
					Your reservation is confirmed, please refer to the information below:
				</h1>
				<div>
					<p className='mt-3'>
						Name: {first} {last}
					</p>
					<p>Phone: {phone}</p>
					<p>Email: {email}</p>
					<p>Date: {date}</p>
					<p>Time: {time}</p>
					<p>Guests: {guests}</p>
					<p>Special Instructions: {instructions}</p>
				</div>
				<Link
					href='/'
					className='mt-3 hover:animate-pulse-glow bg-red-500 hover:animate-pulse-glow-red text-white text-center py-2 px-4 rounded-xl w-full md:w-96 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition ease-in duration-300'>
					Return to Homepage
				</Link>
			</div>
		</Layout>
	);
};

export default BookConfirmation;
