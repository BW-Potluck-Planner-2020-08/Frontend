import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,
} from 'react-router-dom';
import PrivateRoute from './components/common/PrivateRoute';
//Imported Pages//
import { DashboardPage } from './components/pages/Dashboard';
import { MyProfilePage } from './components/pages/MyProfile';
import { HelpPage } from './components/pages/Help/';
//Imported Pages//

import { rootReducer } from './state/reducers';

import { NotFoundPage } from './components/pages/NotFound';
import { LoginPage } from './components/pages/Login';
import { LandingPage } from './components/pages/Landing';
import { Provider } from 'react-redux';
import './index.css';

const store = createStore(
  rootReducer /* preloadedState, */,
  +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// console.log(store.getState());
ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <App className="bg" />
      </Provider>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

function App() {
  // The reason to declare App this way is so that we can use any helper functions we'd need for business logic, in our case auth.
  // React Router has a nifty useHistory hook we can use at this level to ensure we have security around our routes.
  // const history = useHistory();

  return (
    <div className="container">
      <Switch>
        <PrivateRoute path="/dashboard">
          <DashboardPage />
        </PrivateRoute>
        <PrivateRoute path="/my-profile">
          <MyProfilePage />
        </PrivateRoute>
        <Route path="/help">
          <HelpPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
