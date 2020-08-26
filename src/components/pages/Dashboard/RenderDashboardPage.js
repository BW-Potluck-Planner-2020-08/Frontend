import React from 'react';
import { Link } from 'react-router-dom';
import { CreateNewEvent } from '../CreateNewEvent/';

function RenderDashboardPage(props) {
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
        <CreateNewEvent />
      </div>
    </div>
  );
}
export default RenderDashboardPage;
