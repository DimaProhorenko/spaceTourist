import { useState } from 'react';
import PropTypes from 'prop-types';
import { Logo } from './';
import burgerIcon from '../assets/shared/icon-hamburger.svg';
import closeIcon from '../assets/shared/icon-close.svg';
import navLinks from '../fixtures/nav';

function Header({ children }) {
	return (
		<header className="fixed top-0 left-0 w-full py-2 border border-red-500 z-50">
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

Header.MobileNav = function HeaderMobileNav({
	children,
	isOpen = false,
	...restProps
}) {
	const openClass = isOpen ? 'translate-x-0' : '';
	return (
		<nav
			className={`absolute top-0 right-0 h-screen w-2/3 p-3 bg-glass backdrop-blur-lg z-20 translate-x-full transition-transform ${openClass}`}
			{...restProps}
		>
			<Header.NavList className="pt-20 px-5 flex flex-col gap-4">
				{navLinks.map((link, idx) => (
					<li key={link.id}>
						<a
							href={link.address}
							className="uppercase tracking-wider text-lg"
						>
							<span className="mr-4 font-bold">0{idx}</span>
							{link.text}
						</a>
					</li>
				))}
			</Header.NavList>
			{children}
		</nav>
	);
};

Header.MobileNav.propTypes = {
	children: PropTypes.any,
	isOpen: PropTypes.bool,
};

Header.NavList = function HeaderNavList({ children, ...restProps }) {
	return <ul {...restProps}>{children}</ul>;
};

Header.NavList.propTypes = {
	children: PropTypes.any.isRequired,
};

Header.Toggler = function HeaderToggler({ defaultIsOpen = false, cb }) {
	const [isOpen, setIsOpen] = useState(defaultIsOpen);
	const handleToggle = () => {
		setIsOpen((prevState) => !prevState);
		if (typeof cb === 'function') {
			cb();
		}
	};
	return (
		<button className="p-2 relative z-50" onClick={handleToggle}>
			{isOpen ? <Header.Close /> : <Header.Burger />}
		</button>
	);
};

Header.Toggler.propTypes = {
	defaultIsOpen: PropTypes.bool,
	cb: PropTypes.func,
};

Header.Burger = function HeaderBurger() {
	return <img src={burgerIcon} />;
};

Header.Close = function HeaderClose() {
	return <img src={closeIcon} />;
};

export default Header;
