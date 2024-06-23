import Layout from '../components/Layout';
import bgImgBook from '../assets/images/table.jpg';

const Book = () => {
	return (
		<Layout>
			<div
				style={{ backgroundImage: `url(${bgImgBook.src})` }}
				className='-mt-20 bg-contain bg-center w-full h-dvh p-1 md:p-8 lg:p-16 flex flex-col items-start justify-center'>
				<h1>Book a table Page</h1>
			</div>
		</Layout>
	);
};

export default Book;
