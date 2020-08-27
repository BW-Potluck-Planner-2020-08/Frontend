import React from 'react';
import { Link } from 'react-router-dom';

function RenderHelpPage(props) {
  return (
    <div className="page">
      <header>
        <h1>POTLUCK PLANNER</h1>
        <nav>
          <Link to="/landing">Home</Link>
          <span className="navspans"></span>
          <Link to="/dashboard">DashBoard</Link>
          <span className="navspans"></span>
          <Link to="/my-profile">My Profile</Link>
          <span className="navspans"></span>
          <Link to="/login"> Login</Link>
        </nav>
      </header>
      <div className="content-container">
        <h1>Help</h1>
      </div>
    </div>
  );
}
export default RenderHelpPage;
