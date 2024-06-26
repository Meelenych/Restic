import React from 'react';

const CircleText = ({ text }) => {
	return (
		<svg
			width='100'
			height='100'
			viewBox='0 0 100 100'
			xmlns='http://www.w3.org/2000/svg'>
			<defs>
				<path
					id='circlePath'
					d='
            M 50, 50
            m -40, 0
            a 40,40 0 1,1 80,0
            a 40,40 0 1,1 -80,0
          '
				/>
			</defs>
			<text>
				<textPath
					href='#circlePath'
					className='font-extrabold text-xl'>
					{text.toUpperCase()}
				</textPath>
			</text>
		</svg>
	);
};

export default CircleText;
