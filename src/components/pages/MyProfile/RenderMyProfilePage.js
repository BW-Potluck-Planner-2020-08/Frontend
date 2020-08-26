import React from 'react';
import { Link } from 'react-router-dom';

function RenderMyProfilePage(props) {
  return (
    <div className="page">
      <header>
        <h1>POTLUCK PLANNER</h1>
        <nav>
          <Link to="/landing">Home</Link>
          <Link to="/login"> Login</Link>
          <Link to="/dashboard">DashBoard</Link>
          <Link to="/help">Help</Link>
        </nav>
      </header>
      <div className="content-container">
        <h1>My Profile</h1>
      </div>
    </div>
  );
}
export default RenderMyProfilePage;
