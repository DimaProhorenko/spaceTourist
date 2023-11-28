import { useState, useEffect } from 'react';
import { Header } from '../components';

function HeaderContainer() {
	const [windowWidth, setWindowWidth] = useState(0);
	const isMobile = windowWidth <= 768;
	console.log(isMobile);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		document.addEventListener('resize', handleResize);
		document.addEventListener('DOMContentLoaded', handleResize);
		handleResize();

		return () => {
			document.removeEventListener('resize', handleResize);
			document.removeEventListener('DOMContentLoaded', handleResize);
		};
	}, []);

	return (
		<Header>
			<Header.Container>
				<Header.Logo />
				<Header.MobileNav>
					<h1>Nav</h1>
				</Header.MobileNav>
				{isMobile && <Header.Toggler />}
			</Header.Container>
		</Header>
	);
}
export default HeaderContainer;
