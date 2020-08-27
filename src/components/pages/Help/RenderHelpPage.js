import React from 'react';
import { Link } from 'react-router-dom';
// import stepone from '../../../assets/steps/stepone.gif'

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
        <div className="steps">
          <div className="stepone">
            <h1>STEP 1</h1>
            <h2>Register for an account.</h2>
            <img
              src={require('../../../assets/steps/stepone.gif')}
              alt="stepone"
            />
          </div>
          <div className="steptwoandthree">
            <h1>STEP 2</h1>
            <h2>Log in.</h2>
            <img
              src={require('../../../assets/steps/steptwo.gif')}
              alt="steptwo"
            />
            <br></br>
            <h1>STEP 3</h1>
            <h2>Create a New Event.</h2>
            <img
              src={require('../../../assets/steps/stepthree.gif')}
              alt="stepthree"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default RenderHelpPage;
