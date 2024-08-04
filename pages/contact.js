import Layout from '../components/Layout';
import GoogleMap from '../components/GoogleMap';

const Contact = () => {
	return (
		<Layout>
			<h1 className='text-2xl p-5'>Find us here</h1>
			<GoogleMap />
			<div className='p-5'>
				<p>Our address:</p>
				<address>1250 Main St., Chicago, 60007 IL, USA</address>
				<p>
					<a href='tel:+1234567890'> Phone: (123) 456-7890</a>
				</p>
				<p>
					Email: <a href='mailto:admin@example.com'>admin@example.com</a>
				</p>
			</div>
		</Layout>
	);
};

export default Contact;
