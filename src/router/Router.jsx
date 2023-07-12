import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Error404 from '../pages/Error404';
import Logement from '../pages/Logement';

function Router() {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="/home" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/logement/:id" element={<Logement />} />
			<Route path="*" element={<Error404 />} />
		</Routes>
	);
}

export default Router;
