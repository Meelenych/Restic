import Layout from '../components/Layout';
import GoogleMap from '../components/GoogleMap';
import IconSelector from '../helpers/IconSelector';

const Contact = () => {
	return (
		<Layout>
			<h1 className='text-2xl p-5'>Find us here</h1>
			<GoogleMap />
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
				<div className='p-5'></div>
			</div>
		</Layout>
	);
};

export default Contact;
