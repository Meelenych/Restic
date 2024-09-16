import React from 'react';
import Layout from '../components/Layout';
import withAuth from '../components/hoc/withAuth';
import Link from 'next/link';

const dashboard = () => {
	return (
		<Layout>
			<div className='p-6'>
				<h1 className='text-lg'>Welcome to your dashboard</h1>
				<p>Here you can manage your orders, and more.</p>
				<Link
					className='text-purple-700 hover:text-purple-500'
					href='/cartPage'>
					Check your cart here
				</Link>
			</div>
		</Layout>
	);
};

export default withAuth(dashboard);
