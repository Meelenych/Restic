import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Layout from '../components/Layout';
import Image from 'next/image';
import { useState } from 'react';

const Gallery = () => {
	const [activeTab, setActiveTab] = useState(1); // State to manage active tab

	const handleTabClick = tabIndex => {
		setActiveTab(tabIndex);
	};

	return (
		<Layout>
			<div className='p-5'>
				<h1 className='text-3xl text-center'>Our atmosphere</h1>
				<p className='text-xl text-center p-4'>
					Our restaurant is known for its warm ambiance, inviting and friendly
					atmosphere. Our staff are friendly, attentive, and always ready to help you
					enjoy your meal.
				</p>
				<div className='flex flex-col items-center'>
					<div
						role='tablist'
						className='tabs tabs-lifted tabs-lg w-full md:w-1/2'>
						<a
							role='tab'
							className={`tab ${activeTab === 1 ? 'tab-active' : ''}`}
							onClick={() => handleTabClick(1)}
							style={{ borderBottomColor: 'none' }}>
							Food
						</a>
						<a
							role='tab'
							className={`tab ${activeTab === 2 ? 'tab-active' : ''}`}
							onClick={() => handleTabClick(2)}
							style={{ borderBottomColor: 'none' }}>
							Ambience
						</a>
					</div>

					<div
						className={`p-4 bg-base-100 w-full md:w-1/2 rounded-b-lg ${
							activeTab === 1 ? 'rounded-tr-lg' : 'rounded-tl-lg'
						}`}>
						{activeTab === 1 && (
							<Swiper
								modules={[Navigation, Pagination]}
								spaceBetween={30}
								navigation
								pagination={{ clickable: true }}
								className='w-[100%] md:w-[100%] rounded-box'>
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
							</Swiper>
						)}

						{activeTab === 2 && (
							<Swiper
								modules={[Navigation, Pagination]}
								spaceBetween={30}
								navigation
								pagination={{ clickable: true }}
								className='w-[100%] md:w-[100%] rounded-box'>
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
										src='/webp/DJ_Robot.webp'
										className='w-full'
										alt='DJ Robot'
										width={100}
										height={100}
										unoptimized
									/>
								</SwiperSlide>
							</Swiper>
						)}
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Gallery;
