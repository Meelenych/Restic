import Layout from '../components/Layout';

const Gallery = () => {
	return (
		<Layout>
			<div className='p-5'>
				<h1>Our atmosphere</h1>
				<p>
					Our restaurant is known for its warm ambiance, inviting and friendly
					atmosphere. Our staff are friendly, attentive, and always ready to help you
					enjoy your meal.
				</p>
				<div className='flex justify-center'>
					<div className='carousel w-[40%] rounded-box'>
						<div
							id='slide1'
							className='carousel-item relative w-full'>
							<img
								src='/webp/DJ_Robot.webp'
								className='w-full'
							/>
							<div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
								<a
									href='#slide4'
									className='btn btn-circle'>
									❮
								</a>
								<a
									href='#slide2'
									className='btn btn-circle'>
									❯
								</a>
							</div>
						</div>
						<div
							id='slide2'
							className='carousel-item relative w-full'>
							<img
								src='/webp/rest_bg.jpg'
								className='w-full'
							/>
							<div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
								<a
									href='#slide1'
									className='btn btn-circle'>
									❮
								</a>
								<a
									href='#slide3'
									className='btn btn-circle'>
									❯
								</a>
							</div>
						</div>
						<div
							id='slide3'
							className='carousel-item relative w-full'>
							<img
								src='/webp/Table.jpg'
								className='w-full'
							/>
							<div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
								<a
									href='#slide2'
									className='btn btn-circle'>
									❮
								</a>
								<a
									href='#slide4'
									className='btn btn-circle'>
									❯
								</a>
							</div>
						</div>
						<div
							id='slide4'
							className='carousel-item relative w-full'>
							<img
								src='/webp/Table2.jpg'
								className='w-full'
							/>
							<div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
								<a
									href='#slide3'
									className='btn btn-circle'>
									❮
								</a>
								<a
									href='#slide1'
									className='btn btn-circle'>
									❯
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Gallery;
