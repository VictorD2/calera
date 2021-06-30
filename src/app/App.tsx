import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Pages
import Home from '../pages/Home';
import Tienda from '../pages/Tienda';

function App() {
	// const [loading, setLoading] = useState(false);
	useEffect(() => {
		// setLoading(true);
		// window.onload = () => setLoading(false);
	}, []);
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/Tienda' component={Tienda} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
