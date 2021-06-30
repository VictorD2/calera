import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";


//Pages
import Home from '../pages/Home';
import Footer from '../partials/Footer';
import Tienda from '../pages/Tienda';
import Header from '../partials/Header';

function App() {

  // const [loading, setLoading] = useState(false);
  useEffect(() => {
    // setLoading(true);
    // window.onload = () => setLoading(false);
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Tienda" component={Tienda} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
