import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Destination } from './pages/';
import HeaderContainer from './containers/HeaderContainer';
import { CREW, DESTINATION, HOME, TECH } from './constants/routes';

function App() {
	return (
		<BrowserRouter>
			<HeaderContainer />
			<Routes>
				<Route path={HOME} element={<Home />} />
				<Route path={DESTINATION} element={<Destination />} />
				<Route path={CREW} element={<h1>CREW</h1>} />
				<Route path={TECH} element={<h1>Technology</h1>} />
			</Routes>
		</BrowserRouter>
	);
}
export default App;
