import { useState } from 'react';
import PropTypes from 'prop-types';
import { Logo } from './';
import burgerIcon from '../assets/shared/icon-hamburger.svg';
import closeIcon from '../assets/shared/icon-close.svg';
import navLinks from '../fixtures/nav';

function Header({ children }) {
	return (
		<header className="fixed top-0 left-0 w-full z-50">
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
					<Header.NavItem
						key={link.id}
						index={idx}
						href={link.address}
					>
						{link.text}
					</Header.NavItem>
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

Header.Nav = function HeaderNav({ children, ...restProps }) {
	return (
		<Header.NavList
			{...restProps}
			className="flex gap-4 bg-glass backdrop-blur-md px-16 pt-4 relative before:w-1/2 before:h-px before:bg-white before:absolute before:top-1/2 before:-left-[45%] before:opacity-30"
		>
			{navLinks.map((link, idx) => (
				<Header.NavItem key={link.id} href={link.address} index={idx}>
					{link.text}
				</Header.NavItem>
			))}
			{children}
		</Header.NavList>
	);
};

Header.Nav.propTypes = {
	children: PropTypes.any,
};

Header.NavList = function HeaderNavList({ children, ...restProps }) {
	return <ul {...restProps}>{children}</ul>;
};

Header.NavList.propTypes = {
	children: PropTypes.any.isRequired,
};

Header.NavItem = function HeaderNavItem({ children, href, index }) {
	return (
		<li>
			<Header.Link>
				<span className="mr-2 font-bold" href={href}>
					0{index}
				</span>
				{children}
			</Header.Link>
		</li>
	);
};

Header.NavItem.propTypes = {
	children: PropTypes.any.isRequired,
	href: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired,
};

Header.Link = function HeaderLink({ children, ...restProps }) {
	return (
		<a
			{...restProps}
			className="cursor-pointer pb-4 uppercase tracking-wider text-lg inline-block relative before:w-full before:h-px before:bg-white before:absolute before:bottom-px before:inset-x-0 before:scale-x-0 hover:before:scale-x-100"
		>
			{children}
		</a>
	);
};

Header.Link.propTypes = {
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
