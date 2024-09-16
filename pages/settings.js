import React from 'react';
import Layout from '../components/Layout';

const Settings = () => {
	return (
		<Layout>
			<div className='p-6 flex flex-col'>
				<h1 className='text-2xl'>Settings</h1>
				<label for='avatar'>Choose avatar</label>
				<input
					id='avatar'
					name='avatar'
					type='file'
				/>
			</div>
		</Layout>
	);
};

export default Settings;
