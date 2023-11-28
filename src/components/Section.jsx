import PropTypes from 'prop-types';

function Section({ children, bgImage }) {
	return (
		<div
			className={`min-h-screen bg-center bg-no-repeat bg-cover`}
			style={{ backgroundImage: `url('${bgImage}')` }}
		>
			{children}
		</div>
	);
}

Section.propTypes = {
	children: PropTypes.any.isRequired,
	bgImage: PropTypes.any,
};
export default Section;
