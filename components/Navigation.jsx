import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Navigation.module.css';
import { useSelector } from 'react-redux';

const Navigation = () => {
	const [layout, setLayout] = useState('row');
	const loggedIn = useSelector(state => state.auth.loggedIn);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const handleResize = () => {
				setLayout(window.innerWidth < 1024 ? 'column' : 'row');
			};
			handleResize();
			window.addEventListener('resize', handleResize);
			return () => window.removeEventListener('resize', handleResize);
		}
	}, []);

	const navClass = layout === 'row' ? styles['nav-row'] : styles['nav-column'];

	return (
		<nav className='w-full'>
			<ul className={navClass}>
				<li className={styles['nav-item']}>
					<Link href='/'>
						<span className='script-italics text-2xl'>Elzar&apos;s</span>
					</Link>
				</li>
				<li className={styles['nav-item']}>
					<Link href='/about'>
						<span>About</span>
					</Link>
				</li>
				<li className={styles['nav-item']}>
					<Link href='/menu'>
						<span>Menu</span>
					</Link>
				</li>
				<li className={styles['nav-item']}>
					<Link href='/gallery'>
						<span>Gallery</span>
					</Link>
				</li>
				<li className={styles['nav-item']}>
					<Link href='/contact'>
						<span>Contact</span>
					</Link>
				</li>
				{!loggedIn && (
					<li className={styles['nav-item']}>
						<Link href='/login'>
							<span>Login</span>
						</Link>
					</li>
				)}
			</ul>
		</nav>
	);
};

export default Navigation;
