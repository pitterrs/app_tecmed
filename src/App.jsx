import React from 'react';
import { Route, useHistory, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavMenu from './components/Menu';
import Home from './components/pages/Home';
import Equipamentos from './components/pages/Equipamentos';
import OrdemServices from './components/pages/OrdemServices';
import ControlAccess from './components/pages/Access';
import Login from './Login';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import config from './config';

const oktaAuth = new OktaAuth(config.oidc);

function App() {

  const history = useHistory();

  const customAuthHandler = () => {
    history.push('/login');
  };

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri || '', window.location.origin));
  };

  return (
    <div>
      <Security
        oktaAuth={oktaAuth}
        onAuthRequired={customAuthHandler}
        restoreOriginalUri={restoreOriginalUri}
      >
        <NavMenu />
        <Switch>
          <SecureRoute path="/" exact component={Home} />
          <SecureRoute path="/Equipamentos" component={Equipamentos} />
          <SecureRoute path="/OrdemServices" exact component={OrdemServices} />
          <SecureRoute path="/ControlAccess" exact component={ControlAccess} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/login/callback" component={LoginCallback} />
        </Switch>
      </Security>
    </div>
  );
}

export default App;
