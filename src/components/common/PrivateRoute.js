import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = props => {
  const { children, ...rest } = props;
  return (
    <Route
      {...rest}
      render={() => {
        return localStorage.getItem('token') ? (
          children
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};

export default ProtectedRoute;
