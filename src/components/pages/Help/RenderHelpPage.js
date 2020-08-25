import React from 'react';
import { Link } from 'react-router-dom';

function RenderHelpPage(props) {
  return (
    <div className="page">
      <header>
        <nav>
          <Link to="/login"> Login</Link>
          <Link to="/dashboard">DashBoard</Link>
          <Link to="/my-profile">My Profile</Link>
          <Link to="/landing">Home</Link>
        </nav>
      </header>
      <div className="content-container">
        <h1>Help</h1>
      </div>
    </div>
  );
}
export default RenderHelpPage;
