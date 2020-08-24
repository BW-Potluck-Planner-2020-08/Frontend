import React from 'react';
import { Link } from 'react-router-dom';

function RenderHelpPage(props) {
  return (
    <div>
      <nav>
        <li>
          <Link to="/landing">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">DashBoard</Link>
        </li>
        <li>
          <Link to="/my-profile">My Profile</Link>
        </li>
        <li>
          <Link to="/login"> Login</Link>
        </li>
      </nav>
      <h1>Help</h1>
    </div>
  );
}
export default RenderHelpPage;
