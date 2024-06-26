import React from 'react';

const CircleText = ({ text }) => {
	return (
		<svg
			width='140'
			height='140'
			viewBox='0 0 120 120'
			xmlns='http://www.w3.org/2000/svg'>
			<defs>
				<path
					id='circlePath'
					d='
            M 50, 50
            m -30, 10
            a 40,40 0 1,1 80,0
            a 40,40 0 1,1 -80,0
          '
				/>
			</defs>
			<text>
				<textPath
					href='#circlePath'
					className='font-extrabold text-xl'
					style={{ wordSpacing: 1.5 + 'rem' }}>
					{text.toUpperCase()}
				</textPath>
			</text>
		</svg>
	);
};

export default CircleText;
