import React from 'react';
import { Link } from 'react-router-dom';

function RenderDashboardPage(props) {
  return (
    <div>
      <nav>
        <li>
          <Link to="/landing">Home</Link>
        </li>
        <li>
          <Link to="/login"> Login</Link>
        </li>
        <li>
          <Link to="/my-profile">My Profile</Link>
        </li>
        <li>
          <Link to="/help">Help</Link>
        </li>
      </nav>
      <h1>DashBoard</h1>
    </div>
  );
}
export default RenderDashboardPage;
