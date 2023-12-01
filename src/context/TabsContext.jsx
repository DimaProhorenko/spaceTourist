import { useState, createContext, useContext } from 'react';
import PropTypes from 'prop-types';

const TabContext = createContext();

export const TabsProvider = ({ children }) => {
	const [activeIndex, setActiveIndex] = useState(0);

	const handleTabClick = (index) => {
		setActiveIndex(index);
		console.log('object');
	};

	return (
		<TabContext.Provider
			value={{
				activeIndex,
				handleTabClick,
			}}
		>
			{children}
		</TabContext.Provider>
	);
};

TabsProvider.propTypes = {
	children: PropTypes.any.isRequired,
};

export const TabsContext = () => {
	return useContext(TabContext);
};
