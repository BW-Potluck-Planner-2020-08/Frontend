import React, { useState } from 'react';
import { Link, Switch, useHistory } from 'react-router-dom';
import { CreateNewEvent } from '../CreateNewEvent/';
import PrivateRoute from '../../common/PrivateRoute';

function RenderDashboardPage(props) {
  const [newEvent, setNewEvent] = useState(false);
  const history = useHistory();

  const createNewEvent = e => {
    e.preventDefault();
    setNewEvent(true);
    history.push('/dashboard/new-event');
  };

  return (
    <div className="page">
      <header>
        <nav>
          <Link to="/landing">Home</Link>
          <Link to="/login"> Login</Link>
          <Link to="/my-profile">My Profile</Link>
          <Link to="/help">Help</Link>
        </nav>
      </header>
      <div className="content-container">
        <h1>DashBoard</h1>
        <div>
          {!newEvent ? (
            <button onClick={createNewEvent}>Create New Potluck</button>
          ) : null}
          {newEvent ? <CreateNewEvent newEvent={newEvent} /> : null}
        </div>
        <div></div>
        <Switch>
          <PrivateRoute path="/dashboard/new-event/step-two"></PrivateRoute>
          <PrivateRoute path="/new-event">
            {/* <CreateNewEvent /> */}
          </PrivateRoute>
        </Switch>
      </div>
    </div>
  );
}
export default RenderDashboardPage;
