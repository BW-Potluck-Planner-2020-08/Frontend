import React from 'react';
import { Link } from 'react-router-dom';

function RenderDashboardPage(props) {
  return (
    <div>
      <header>
        <nav>
          <Link to="/landing">Home</Link>
          <Link to="/login"> Login</Link>
          <Link to="/my-profile">My Profile</Link>
          <Link to="/help">Help</Link>
        </nav>
      </header>
      <div className="content-container-dashboard">
        <h1>DashBoard</h1>
      </div>
    </div>
  );
}
export default RenderDashboardPage;
