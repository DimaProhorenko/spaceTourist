import PropTypes from 'prop-types';

import { TabsProvider, TabsContext } from '../context/TabsContext';

function Tabs({ children }) {
	return (
		<TabsProvider>
			<div>{children}</div>
		</TabsProvider>
	);
}

Tabs.propTypes = {
	children: PropTypes.any.isRequired,
	defaultActiveIndex: PropTypes.number,
};

Tabs.List = function TabsList({ children, className }) {
	const classes = `flex gap-2 ${className ? className : ''}`;
	return <div className={classes}>{children}</div>;
};

Tabs.List.propTypes = {
	children: PropTypes.any.isRequired,
	className: PropTypes.string,
};

Tabs.Tab = function TabsTab({ children, index }) {
	const { activeIndex, handleTabClick } = TabsContext();

	const isActive = activeIndex === index;
	const classes = `flex items-center justify-center w-14 h-14 rounded-full border border-slate-500 hover:border-white ${
		isActive ? 'bg-white text-black border-white' : 'bg-transparent'
	}`;

	return (
		<button className={classes} onClick={() => handleTabClick(index)}>
			{children}
		</button>
	);
};

Tabs.Tab.propTypes = {
	children: PropTypes.any.isRequired,
	index: PropTypes.number.isRequired,
};

Tabs.Panel = function TabsPanel({ children, index, className }) {
	const { activeIndex } = TabsContext();
	const isActive = index === activeIndex;
	return isActive ? <div className={className}>{children}</div> : null;
};

Tabs.Panel.propTypes = {
	children: PropTypes.any.isRequired,
	index: PropTypes.number.isRequired,
	className: PropTypes.string,
};

export default Tabs;
