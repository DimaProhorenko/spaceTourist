import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home, Destinations, Crew } from './pages/';
import HeaderContainer from './containers/HeaderContainer';
import {
	CREW,
	DESTINATION,
	DESTINATION_INDEX_REDIRECT,
	DESTINATION_PARAM,
	HOME,
	TECH,
} from './constants/routes';

function App() {
	return (
		<BrowserRouter>
			<HeaderContainer />
			<Routes>
				<Route path={HOME} element={<Home />} />
				<Route path={DESTINATION}>
					<Route
						path={`:${DESTINATION_PARAM}`}
						element={<Destinations />}
					/>
					<Route
						index
						element={
							<Navigate replace to={DESTINATION_INDEX_REDIRECT} />
						}
					/>
				</Route>

				<Route path={CREW} element={<Crew />} />
				<Route path={TECH} element={<h1>Technology</h1>} />
			</Routes>
		</BrowserRouter>
	);
}
export default App;
