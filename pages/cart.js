import React from 'react';

const cart = () => {
	return (
		<>
			<div className='overflow-x-auto'>
				<table className='table'>
					{/* head */}
					<thead>
						<tr>
							<th>
								<label>
									<input
										type='checkbox'
										className='checkbox'
									/>
								</label>
							</th>
							<th>Dish title</th>
							<th>Decription</th>
							<th>Quantity</th>
							<th>Price</th>
							<th>Total</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}
						<tr>
							<th>
								<label>
									<input
										type='checkbox'
										className='checkbox'
									/>
								</label>
							</th>
							<td>
								<div className='flex items-center gap-3'>
									<div className='avatar'>
										<div className='mask mask-squircle h-12 w-12'>
											<img
												src='https://img.daisyui.com/images/profile/demo/2@94.webp'
												alt='Avatar Tailwind CSS Component'
											/>
										</div>
									</div>
									<div>
										<div className='font-bold'>Title</div>
										<div className='text-sm opacity-50'>Type</div>
									</div>
								</div>
							</td>
							<td>Zemlak, Daniel and Leannon</td>
							<td>2</td>
							<th>4</th>
							<th>8</th>
						</tr>
					</tbody>
					{/* foot */}
					<tfoot>
						<tr>
							<th></th>
							<th></th>
							<th></th>
							<th></th>
							<th>Grand Total</th>
							<th>500</th>
						</tr>
					</tfoot>
				</table>
			</div>
		</>
	);
};

export default cart;
