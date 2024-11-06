import React from 'react';

const GoogleMap = () => {
	const latitude = 41.6756528;
	const longitude = -87.7970062;
	const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}&output=embed`;

	return (
		<div className='flex justify-center items-center w-full'>
			<iframe
				src={mapUrl}
				width='100%'
				height='400'
				style={{ border: 0 }}
				allowFullScreen=''
				loading='eager'></iframe>
		</div>
	);
};

export default GoogleMap;
