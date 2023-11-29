import PropTypes from 'prop-types';
import NavigationLink from './NavigationLink';
import { DESTINATION } from '../constants/routes';

function Destination({ children }) {
	return <div className="container">{children}</div>;
}

Destination.propTypes = {
	children: PropTypes.any.isRequired,
};
export default Destination;

Destination.Cover = function DestinationCover({ src, alt }) {
	return <img src={src} alt={alt} className="max-w-[300px] mx-auto block" />;
};

Destination.Cover.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
};

Destination.Nav = function DestinationNav({ children }) {
	return <nav>{children}</nav>;
};

Destination.Nav.propTypes = {
	children: PropTypes.any.isRequired,
};

Destination.List = function DestinationList({ items }) {
	return (
		<ul className="flex gap-2 justify-center lg:justify-start">
			{items.map((item) => (
				<li key={item.id}>
					<NavigationLink to={`/${DESTINATION}/${item.name}`}>
						{item.name.toUpperCase()}
					</NavigationLink>
				</li>
			))}
		</ul>
	);
};

Destination.List.propTypes = {
	items: PropTypes.array,
};

Destination.Title = function DestinationTitle({ children }) {
	return (
		<h2 className="uppercase text-[56px] md:text-[80px] lg:text-[100px]">
			{children}
		</h2>
	);
};

Destination.Title.propTypes = {
	children: PropTypes.any.isRequired,
};

Destination.Description = function DestinationDescription({ children }) {
	return <p>{children}</p>;
};

Destination.Description.propTypes = {
	children: PropTypes.any.isRequired,
};

Destination.Info = function DestinationInfo({ children }) {
	return (
		<div className="flex flex-col gap-4 md:flex-row md:justify-between">
			{children}
		</div>
	);
};

Destination.Info.propTypes = {
	children: PropTypes.any.isRequired,
};

Destination.InfoItem = function DestinationInfoItem({ children }) {
	return <div>{children}</div>;
};

Destination.InfoItem.propTypes = {
	children: PropTypes.any.isRequired,
};

Destination.InfoName = function DestinationInfoName({ children }) {
	return <h3 className="uppercase">{children}</h3>;
};

Destination.InfoName.propTypes = {
	children: PropTypes.any.isRequired,
};

Destination.InfoValue = function DestinationInfoValue({ children }) {
	return <h2 className="text-3xl">{children}</h2>;
};

Destination.InfoValue.propTypes = {
	children: PropTypes.any.isRequired,
};
