import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Switch, useHistory } from 'react-router-dom';
import { CreateNewEvent } from '../CreateNewEvent/';
import PrivateRoute from '../../common/PrivateRoute';
import { TOGGLE_EDITING } from '../../../state/reducers/eventsReducer';

function RenderDashboardPage(props) {
  const eventsState = useSelector(state => state.eventsReducer);
  const dispatch = useDispatch();
  const [newEvent, setNewEvent] = useState(false);
  const history = useHistory();

  const createNewEvent = e => {
    e.preventDefault();
    dispatch({ type: TOGGLE_EDITING });
    history.push('/dashboard/new-event');
  };

  return (
    <div className="page">
      <header>
        <h1>POTLUCK PLANNER</h1>
        <nav>
          <Link to="/landing">Home</Link>
          <Link to="/login"> Login</Link>
          <Link to="/my-profile">My Profile</Link>
          <Link to="/help">Help</Link>
        </nav>
      </header>
      <div className="content-container">
        {/*Going to update next div with classname "dashboard-container" that should increase font add colors, waiting until its complete*/}
        <div className="dashboard-container">
          {!eventsState.editing ? (
            <button onClick={createNewEvent}>Create New Potluck</button>
          ) : null}
          {eventsState.editing ? <CreateNewEvent /> : null}
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
