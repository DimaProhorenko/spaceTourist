import PropTypes from 'prop-types';

function MainButton({ children, href = '', className, ...restProps }) {
	const classes =
		"text-xl md:text-4xl text-black bg-white w-1/2 aspect-square rounded-full flex items-center justify-center mx-auto relative before:content-[''] before:w-[150%] before:h-[150%] before:block before:bg-white before:opacity-10 before:absolute before:top-[50%] before:left-[50%] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:scale-0 hover:before:scale-100 before:transition-transform cursor-pointer z-0";
	return href ? (
		<a className={classes} {...restProps}>
			{children}
		</a>
	) : (
		<button {...restProps} className={`${classes} ${className || ''}`}>
			{children}
		</button>
	);
}

MainButton.propTypes = {
	children: PropTypes.any,
	href: PropTypes.string,
	className: PropTypes.string,
};
export default MainButton;
