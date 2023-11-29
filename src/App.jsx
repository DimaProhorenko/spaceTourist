import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home, Destination } from './pages/';
import HeaderContainer from './containers/HeaderContainer';
import {
	CREW,
	DESTINATION,
	DESTINATION_INDEX_REDIRECT,
	DESTINATION_PARAM,
	DESTINATION_WITH_PARAM,
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
						element={<Destination />}
					/>
					<Route
						index
						element={
							<Navigate replace to={DESTINATION_INDEX_REDIRECT} />
						}
					/>
				</Route>
				{/* <Route
					path={DESTINATION_WITH_PARAM}
					element={<Destination />}
				/> */}
				<Route path={CREW} element={<h1>CREW</h1>} />
				<Route path={TECH} element={<h1>Technology</h1>} />
			</Routes>
		</BrowserRouter>
	);
}
export default App;
