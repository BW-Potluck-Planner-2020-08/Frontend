import React from 'react';
import { Link } from 'react-router-dom';

function RenderMyProfilePage(props) {
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
          <Link to="/dashboard">DashBoard</Link>
        </li>

        <li>
          <Link to="/help">Help</Link>
        </li>
      </nav>
      <h1>My Profile</h1>
    </div>
  );
}
export default RenderMyProfilePage;
