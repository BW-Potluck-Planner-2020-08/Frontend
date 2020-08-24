import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,
} from 'react-router-dom';

import { rootReducer } from './state/reducers';

import { NotFoundPage } from './components/pages/NotFound';
import { LoginPage } from './components/pages/Login';
import { LandingPage } from './components/pages/Landing';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

function App() {
  // The reason to declare App this way is so that we can use any helper functions we'd need for business logic, in our case auth.
  // React Router has a nifty useHistory hook we can use at this level to ensure we have security around our routes.
  const history = useHistory();

  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/landing" component={LandingPage} />
      {/* any of the routes you need secured should be registered as SecureRoutes */}
      <Route path="/">
        <LandingPage />
      </Route>
      <Route component={NotFoundPage} />
    </Switch>
  );
}
