import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Layout from '../components/Layout';
import Image from 'next/image';

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
							<Image
								src='/webp/DJ_Robot.webp'
								className='w-full'
								alt='DJ Robot'
								width={100}
								height={100}
								unoptimized
							/>
						</SwiperSlide>
						<SwiperSlide>
							<Image
								src='/webp/rest_bg.JPG'
								className='w-full'
								alt='Restaurant Background'
								width={100}
								height={100}
								unoptimized
							/>
						</SwiperSlide>
						<SwiperSlide>
							<Image
								src='/webp/Table.jpg'
								className='w-full'
								alt='Table'
								width={100}
								height={100}
								unoptimized
							/>
						</SwiperSlide>
						<SwiperSlide>
							<Image
								src='/webp/Table2.jpg'
								className='w-full'
								alt='Table 2'
								width={100}
								height={100}
								unoptimized
							/>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</Layout>
	);
};

export default Gallery;
