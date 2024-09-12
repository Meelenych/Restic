import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../redux/auth/authSlice';
import jwtDecode from 'jwt-decode';

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const dispatch = useDispatch();
	const loggedIn = useSelector(state => state.auth.loggedIn);
	const token = useSelector(state => state.auth.token);
	const cartItems = useSelector(state => state.cart.items);
	const [username, setUsername] = useState('');

	useEffect(() => {
		if (token) {
			try {
				const decoded = jwtDecode(token);
				setUsername(decoded.login || 'User'); // Adjust based on your token's structure
			} catch (error) {
				console.error('Error decoding token:', error);
			}
		}
	}, [token]);

	const handleLogout = () => {
		dispatch(logOut());
	};

	const handleScroll = () => {
		const offset = window.scrollY;
		if (offset > 50) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
			<div className='navbar'>
				<div className='flex-1'>
					<div className='navbar-start sm:block md:hidden'>
						<div className='drawer'>
							<input
								id='my-drawer'
								type='checkbox'
								className='drawer-toggle'
							/>
							<div className='drawer-content'>
								<label
									htmlFor='my-drawer'
									className='drawer-button'>
									<div
										tabIndex={0}
										role='button'
										className='btn btn-ghost btn-circle'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className='h-5 w-5'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												d='M4 6h16M4 12h16M4 18h7'
											/>
										</svg>
									</div>
								</label>
							</div>
							<div className='drawer-side'>
								<label
									htmlFor='my-drawer'
									aria-label='close sidebar'
									className='drawer-overlay'></label>
								<div className='menu bg-base-200 text-base-content min-h-full w-60 p-4'>
									<Navigation layout='column' />
								</div>
							</div>
						</div>
					</div>
					<div className='hidden md:block w-full'>
						<Navigation layout='row' />
					</div>
				</div>
				{loggedIn && (
					<div className='flex-none'>
						<div className='dropdown dropdown-end'>
							<div
								tabIndex={0}
								role='button'
								className='btn btn-ghost btn-circle'>
								<div className='indicator'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-5 w-5'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
										/>
									</svg>
									<span className='badge badge-sm indicator-item'>
										{cartItems.length}
									</span>
								</div>
							</div>
							<div
								tabIndex={0}
								className='card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow'>
								<div className='card-body'>
									<span className='text-lg font-bold'>{cartItems.length} Items</span>
									<span className='text-info'>
										Subtotal: $
										{cartItems
											.reduce((acc, item) => acc + item.price * item.quantity, 0)
											.toFixed(2)}
									</span>
									{/* To do: idpage left side - cart right side */}
									<div className='card-actions'>
										<Link
											href='/cart'
											className='btn btn-primary btn-block'>
											View cart
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className='dropdown dropdown-end'>
							<div
								tabIndex={0}
								role='button'
								className='btn btn-ghost btn-circle avatar'>
								<div className='w-10 rounded-full'>
									<Image
										alt='Tailwind CSS Navbar component'
										src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
										height={100}
										width={100}
										unoptimized
									/>
								</div>
							</div>

							<ul
								tabIndex={0}
								className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'>
								<li>
									<p>Welcome {username}!</p>
								</li>
								<li>
									<a className='justify-between'>
										Profile
										<span className='badge'>New</span>
									</a>
								</li>
								<li>
									<a>Settings</a>
								</li>
								<li>
									<button onClick={handleLogout}>Logout</button>
								</li>
							</ul>
						</div>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
