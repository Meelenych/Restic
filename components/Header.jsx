import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import styles from '../styles/Header.module.css';

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);

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
			<Navigation layout='row' />
		</header>
	);
};

export default Header;
