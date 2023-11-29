import { useState, useEffect } from 'react';
import { Header } from '../components';

function HeaderContainer() {
	const [windowWidth, setWindowWidth] = useState(0);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const isMobile = windowWidth <= 768;

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);
		document.addEventListener('DOMContentLoaded', handleResize);

		handleResize();

		return () => {
			window.removeEventListener('resize', handleResize);
			document.removeEventListener('DOMContentLoaded', handleResize);
		};
	}, []);

	return (
		<Header>
			<Header.Container>
				<Header.Logo />
				{!isMobile && <Header.Nav />}
				{isMobile && <Header.MobileNav isOpen={isMenuOpen} />}
				{isMobile && (
					<Header.Toggler
						defaultIsOpen={isMenuOpen}
						cb={() => setIsMenuOpen((prevState) => !prevState)}
					/>
				)}
			</Header.Container>
		</Header>
	);
}
export default HeaderContainer;
