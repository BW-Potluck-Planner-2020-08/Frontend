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
          <div>
            <h1>STEP 1</h1>
            <h2>Register for an account.</h2>
            <img
              className="stepone"
              src={require('../../../assets/steps/stepone.gif')}
              alt="stepone"
            />
            <br></br>
            <h1>STEP 4</h1>
            <h2>Fill in Event Details.</h2>
            <img
              className="stepfour"
              src={require('../../../assets/steps/stepfour.gif')}
              alt="stepfour"
            />
          </div>
          <div>
            <h1>STEP 2</h1>
            <h2>Log in.</h2>
            <img
              className="steptwo"
              src={require('../../../assets/steps/steptwo.gif')}
              alt="steptwo"
            />
            <br></br>
            <h1>STEP 5</h1>
            <h2>Add items for guests to bring.</h2>
            <img
              className="stepfive"
              src={require('../../../assets/steps/stepfive.gif')}
              alt="stepfive"
            />
          </div>
          <div>
            <h1>STEP 3</h1>
            <h2>Create a New Event.</h2>
            <img
              src={require('../../../assets/steps/stepthree.gif')}
              alt="stepthree"
            />
            <br></br>
            <h1>STEP 6</h1>
            <h2>Add invites for guests.</h2>
            <img
              className="stepsix"
              src={require('../../../assets/steps/stepsix.gif')}
              alt="finalstep"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default RenderHelpPage;
