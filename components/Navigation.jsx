import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navigation.module.css';
import { useSelector } from 'react-redux';

const Navigation = ({ layout = 'row' }) => {
	const navClass = layout === 'row' ? styles['nav-row'] : styles['nav-column'];
	const loggedIn = useSelector(state => state.auth.loggedIn);

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
