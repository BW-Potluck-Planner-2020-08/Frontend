import React from 'react';
import { Link } from 'react-router-dom';

function RenderMyProfilePage(props) {
  return (
    <div>
      <header>
        <nav>
          <Link to="/landing">Home</Link>
          <Link to="/login"> Login</Link>
          <Link to="/dashboard">DashBoard</Link>
          <Link to="/help">Help</Link>
        </nav>
      </header>

      <h1>My Profile</h1>
    </div>
  );
}
export default RenderMyProfilePage;
