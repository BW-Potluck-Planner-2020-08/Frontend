import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useAPI } from '../../../hooks/useAPI';

import { useForm } from '../../../hooks/useForm';

const initialFormValues = {
  email: '',
  password: '',
};

const LoginPage = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [values, handleChanges, resetForm] = useForm(initialFormValues);
  const [isLoading, setIsLoading] = useState(false);
  let history = useHistory();
  const [data, moveData, error] = useAPI({
    method: 'post',
    url: '/api/login',
    data: values,
  });

  const postLogin = () => {
    moveData()
      .then(res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        setIsLoading(false);
        history.push('/dashboard');
        resetForm();
      })
      .catch(err => console.log(err));
  };

  const login = e => {
    e.preventDefault();
    setIsLoading(true);
    // console.log(values)
    postLogin();
  };

  return (
    <>
      <header>
        <nav>
          <Link to="/landing"> Home</Link>
          <Link to="/dashboard">DashBoard</Link>
          <Link to="/my-profile">My Profile</Link>
          <Link to="/help">Help</Link>
        </nav>
      </header>
      <div className="content-container-login">
        <h1>Login</h1>

        <section>
          <form onSubmit={login}>
            <input
              type="text"
              name="email"
              placeholder="email"
              value={values.email}
              onChange={handleChanges}
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              value={values.password}
              onChange={handleChanges}
            />
            {!isLoading ? (
              <button>Log In</button>
            ) : (
              <button disabled>Loading...</button>
            )}
          </form>
          ​
        </section>
      </div>
    </>
  );
};

export default LoginPage;
