import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const useAPI = config => {
  const [dataAPI, setData] = useState('');
  const [error, setError] = useState('');
  const { method, url, data } = config;

  const moveData = () => {
    console.log(config);
    return axiosWithAuth()
      [method](url, data)
      .then(res => res.data)
      .catch(err => err.message);
  };
  // console.log(dataAPI)
  return [dataAPI, moveData, error];
};
