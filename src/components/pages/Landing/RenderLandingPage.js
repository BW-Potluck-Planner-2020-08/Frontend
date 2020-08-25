import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../../../index.css';
import { states } from '../../../constants/index';
import { useForm } from '../../../hooks/useForm';
import Dropdown from '../../common/Dropdown';

const initialFormValues = {
  first_name: '',
  last_name: '',
  email: '',
  address: '',
  location: '',
  password: '',
};

function RenderLandingPage(props) {
  const [values, handleChanges, resetForm] = useForm(initialFormValues);
  const [isLoading, setIsLoading] = useState(false);
  let history = useHistory();
  //   const [data, moveData, error] = useAPI({
  //     method: 'post',
  //     url: '/api/login',
  //     data: values
  // })

  //   const postLogin = () => {
  //     moveData()
  //     .then( res => {
  //       // console.log(res)
  //       localStorage.setItem('token', res.payload)
  //       setIsLoading(false)
  //       history.push('/bubbles')
  //       resetForm()
  //     })
  //   .catch( err => console.log(err))
  //   }

  const login = e => {
    e.preventDefault();
    setIsLoading(true);
    console.log(values);
    // postLogin()
    // axiosWithAuth()
    // .post('/api/login', credentials)
  };
  return (
    <>
      <header>
        <nav>
          <Link to="/login"> Login</Link>
          <Link to="/dashboard">DashBoard</Link>
          <Link to="/my-profile">My Profile</Link>
          <Link to="/help">Help</Link>
        </nav>
      </header>
      <div className="landing">
        <div className="content-container">
          <div className="form">
            <h2>Create an Account to Get Started!</h2>
            <section>
              <form onSubmit={login}>
                <div>
                  <input
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    value={values.first_name}
                    onChange={handleChanges}
                  />
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    value={values.last_name}
                    onChange={handleChanges}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChanges}
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={values.address}
                    onChange={handleChanges}
                  />

                  <Dropdown
                    data={states}
                    id="locationInput"
                    name="location"
                    value={values.location}
                    onChange={handleChanges}
                  />
                </div>

                <div>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={values.password}
                    onChange={handleChanges}
                  />
                </div>

                {!isLoading ? (
                  <button>CREATE MY ACCOUNT</button>
                ) : (
                  <button disabled>Loading...</button>
                )}
              </form>
              ​
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
export default RenderLandingPage;
