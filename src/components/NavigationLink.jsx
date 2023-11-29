import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function NavigationLink({ children, href, ...restProps }) {
	return (
		<NavLink
			to={href}
			{...restProps}
			className="cursor-pointer pb-4 uppercase tracking-wider text-lg inline-block relative before:w-full before:h-px before:bg-white before:absolute before:bottom-px before:inset-x-0 before:scale-x-0 hover:before:scale-x-100 aria-[current=page]:before:scale-x-100"
		>
			{children}
		</NavLink>
	);
}

NavigationLink.propTypes = {
	children: PropTypes.any.isRequired,
	href: PropTypes.string.isRequired,
};

export default NavigationLink;
