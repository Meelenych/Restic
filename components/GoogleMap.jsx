import React from 'react';

const GoogleMap = () => {
	const latitude = 41.6756528;
	const longitude = -87.7970062;
	const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}&output=embed`;

	return (
		<div className='flex justify-center items-center h-fit'>
			<iframe
				src={mapUrl}
				width='600'
				height='450'
				style={{ border: 0 }}
				allowFullScreen=''
				loading='lazy'></iframe>
		</div>
	);
};

export default GoogleMap;
