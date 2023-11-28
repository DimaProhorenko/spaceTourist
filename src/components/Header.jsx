import PropTypes from 'prop-types';
import { Logo } from './';
import burgerIcon from '../assets/shared/icon-hamburger.svg';
import closeIcon from '../assets/shared/icon-close.svg';
import { useState } from 'react';

function Header({ children }) {
	return (
		<header className="fixed top-0 left-0 w-full border border-red-500 z-50">
			<div className="container">{children}</div>
		</header>
	);
}

Header.propTypes = {
	children: PropTypes.any.isRequired,
};

Header.Container = function HeaderContainer({ children }) {
	return <div className="flex items-center justify-between">{children}</div>;
};

Header.Container.propTypes = {
	children: PropTypes.any.isRequired,
};

Header.Logo = function HeaderLogo() {
	return <Logo />;
};

Header.MobileNav = function HeaderMobileNav({ children, ...restProps }) {
	return (
		<nav
			className="absolute top-0 right-0 h-screen w-2/3 p-3 bg-glass backdrop-blur-sm z-20"
			{...restProps}
		>
			{children}
		</nav>
	);
};

Header.MobileNav.propTypes = {
	children: PropTypes.any.isRequired,
};

Header.Toggler = function HeaderToggler({ defaultIsOpen = false }) {
	const [isOpen, setIsOpen] = useState(defaultIsOpen);
	const handleToggle = () => {
		setIsOpen((prevState) => !prevState);
	};
	return (
		<button className="p-2" onClick={handleToggle}>
			{isOpen ? <Header.Close /> : <Header.Burger />}
		</button>
	);
};

Header.Toggler.propTypes = {
	defaultIsOpen: PropTypes.bool,
};

Header.Burger = function HeaderBurger() {
	return <img src={burgerIcon} />;
};

Header.Close = function HeaderClose() {
	return <img src={closeIcon} />;
};

export default Header;
