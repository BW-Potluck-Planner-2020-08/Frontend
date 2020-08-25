import React from 'react';
import { Link } from 'react-router-dom';
import '../../../index.css';
import { states } from '../../../constants/index';
import Dropdown from '../../common/Dropdown';

const initialFormvalues = [];

function RenderLandingPage(props) {
  return (
    <div className="landing">
      <header>
        <nav>
          <Link to="/login"> Login</Link>
          <Link to="/dashboard">DashBoard</Link>
          <Link to="/my-profile">My Profile</Link>
          <Link to="/help">Help</Link>
        </nav>
      </header>
      <div className="content-container">
        <h1>Landing</h1>
      </div>
      <div className="form"></div>
    </div>
  );
}
export default RenderLandingPage;
