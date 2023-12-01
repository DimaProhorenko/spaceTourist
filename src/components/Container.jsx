import PropTypes from 'prop-types';

function Container({ children }) {
	return (
		<div className="max-w-[500px] lg:max-w-[1000px] mx-auto pt-28 text-center lg:text-left">
			{children}
		</div>
	);
}

Container.propTypes = {
	children: PropTypes.any.isRequired,
};

export default Container;
