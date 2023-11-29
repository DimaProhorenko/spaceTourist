import PropTypes from 'prop-types';

function Title({ children }) {
	return (
		<h1 className="text-base md:text-lg lg:text-[28px] uppercase mb-8">
			{children}
		</h1>
	);
}

Title.propTypes = {
	children: PropTypes.any,
};
export default Title;
