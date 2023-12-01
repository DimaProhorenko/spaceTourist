import PropTypes from 'prop-types';

function Flex({ children, className }) {
	return (
		<div
			className={`${
				className || ''
			} flex flex-col justify-center gap-10 lg:gap-5 lg:flex-row  lg:justify-start`}
		>
			{children}
		</div>
	);
}

Flex.propTypes = {
	children: PropTypes.any.isRequired,
	className: PropTypes.string,
};

Flex.Item = function FlexItem({ children, className, ...restProps }) {
	return (
		<div className={`lg:basis-1/2 ${className || ''}`} {...restProps}>
			{children}
		</div>
	);
};

Flex.Item.propTypes = {
	children: PropTypes.any.isRequired,
	className: PropTypes.any,
};

export default Flex;
