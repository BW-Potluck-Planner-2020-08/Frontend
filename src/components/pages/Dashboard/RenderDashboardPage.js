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

      <h1>DashBoard</h1>
    </div>
  );
}
export default RenderDashboardPage;
