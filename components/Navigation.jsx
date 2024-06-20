import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navigation.module.css';

const Navigation = () => {
	return (
		<nav className={styles.navmenu}>
			<ul className={styles.navlist}>
				<li>
					<Link href='/'>Home</Link>
				</li>
				<li>
					<Link href='/about'>About</Link>
				</li>
				<li>
					<Link href='/menu'>Menu</Link>
				</li>
				<li>
					<Link href='/gallery'>Gallery</Link>
				</li>
				<li>
					<Link href='/book'>Book a table</Link>
				</li>
				<li>
					<Link href='/contact'>Contact</Link>
				</li>
				<li>
					<Link href='/login'>Login</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
