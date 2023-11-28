import PropTypes from 'prop-types';

function Content({ children, ...restProps }) {
	return (
		<div
			{...restProps}
			className="max-w-[500px] mx-auto flex flex-col justify-center min-h-screen gap-4 lg:max-w-[900px] lg:flex-row lg:items-center lg:justify-start text-center lg:text-left"
		>
			{children}
		</div>
	);
}

Content.propTypes = {
	children: PropTypes.any,
};

export default Content;

Content.Item = function ContentItem({ children, ...restProps }) {
	return (
		<div className="basis-1/2" {...restProps}>
			{children}
		</div>
	);
};

Content.Item.propTypes = {
	children: PropTypes.any.isRequired,
};

Content.Title = function ContentTitle({ children, ...restProps }) {
	return (
		<h1
			className="uppercase text-title-sm md:text-title-lg leading-tight"
			{...restProps}
		>
			{children}
		</h1>
	);
};

Content.Title.propTypes = {
	children: PropTypes.any.isRequired,
};

Content.Subtitle = function ContentSubtitle({ children, ...restProps }) {
	return (
		<h3
			className="ppercase text-base sm:text-lg md:text-3xl"
			{...restProps}
		>
			{children}
		</h3>
	);
};

Content.Subtitle.propTypes = {
	children: PropTypes.any.isRequired,
};

Content.Lead = function ContentLead({ children, ...restProps }) {
	return (
		<h1 className="text-sm md:text-lg" {...restProps}>
			{children}
		</h1>
	);
};

Content.Lead.propTypes = {
	children: PropTypes.any.isRequired,
};
