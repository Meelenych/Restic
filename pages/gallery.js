import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
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
					<Swiper
						modules={[Navigation, Pagination]}
						spaceBetween={30}
						navigation
						pagination={{ clickable: true }}
						className='w-[100%] md:w-[50%] rounded-box'>
						<SwiperSlide>
							<img
								src='/webp/DJ_Robot.webp'
								className='w-full'
								alt='DJ Robot'
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								src='/webp/rest_bg.jpg'
								className='w-full'
								alt='Restaurant Background'
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								src='/webp/Table.jpg'
								className='w-full'
								alt='Table'
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								src='/webp/Table2.jpg'
								className='w-full'
								alt='Table 2'
							/>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</Layout>
	);
};

export default Gallery;
