import React from 'react';
import Layout from '../components/Layout';
import withAuth from '../components/hoc/withAuth';

const dashboard = () => {
	return (
		<Layout>
			<div className='p-6'>
				<h1 className='text-lg'>Welcome to your dashboard</h1>
				<p>Here you can manage your orders, and more.</p>
				<p>Please log in to access this feature.</p>
			</div>
		</Layout>
	);
};

export default withAuth(dashboard);
