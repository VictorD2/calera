import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './Layout';
import Home from '../pages/Home';
import MiCuenta from '../pages/MiCuenta';
import CrearCuenta from '../pages/CrearCuenta';
import Profile from './../pages/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/iniciar-sesion" component={MiCuenta} />
          <Route exact path="/registrarme" component={CrearCuenta} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
