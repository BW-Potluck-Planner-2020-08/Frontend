import React, { useState } from 'react';
import { useForm } from '../../../hooks/useForm';
import { useAPI } from '../../../hooks/useAPI';
import { useDispatch } from 'react-redux';
import {
  ADD_EVENT_START,
  ADD_EVENT_SUCCESS,
  ADD_EVENT_ERROR,
} from '../../../state/reducers/eventsReducer';

import RenderCreateNewEventPage from './RenderCreateNewEventPage';

const initialFormValues = {
  date: '',
  event_title: '',
  address_one: '',
  address_two: '',
  city: '',
  state: '',
  zip: '',
  contact_phone: '',
  start_time: '',
  end_time: '',
  special_instructions: '',
};

const CreateNewEvent = () => {
  const [values, handleChanges, resetForm] = useForm(initialFormValues);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [data, moveData, error] = useAPI({
    method: 'post',
    url: '/event',
    data: values,
  });

  const postEvent = () => {
    dispatch({ type: ADD_EVENT_START });
    moveData()
      .then(res => {
        console.log(res);
        dispatch({
          type: ADD_EVENT_SUCCESS,
          payload: res,
        });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ADD_EVENT_ERROR, payload: err });
      });
  };

  const submit = e => {
    e.preventDefault();
    console.log(values);
    setLoading(true);
    postEvent();
    resetForm();
  };

  return (
    <RenderCreateNewEventPage
      values={values}
      handleChanges={handleChanges}
      loading={loading}
      submit={submit}
    />
  );
};

export default CreateNewEvent;
