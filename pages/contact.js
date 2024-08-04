import Layout from '../components/Layout';

const Contact = () => {
	return (
		<Layout>
			<div className='p-5'>
				<h1>Contact Page</h1>
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
