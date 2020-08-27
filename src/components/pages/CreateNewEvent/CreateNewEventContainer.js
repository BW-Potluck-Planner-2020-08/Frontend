import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from '../../../hooks/useForm';
import { useAPI } from '../../../hooks/useAPI';
import { useSelector, useDispatch } from 'react-redux';
import {
  ADD_EVENT_START,
  ADD_EVENT_SUCCESS,
  ADD_EVENT_ERROR,
} from '../../../state/reducers/eventsReducer';

import CreateEventProgressBar from '../../common/CreateEventProgressBar';
import RenderCreateNewEventPage from './RenderCreateNewEventPage';
import StepTwoContainer from './StepTwo/StepTwoContainer';
import StepThreeContainer from './StepThree/StepThreeContainer';

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

const CreateNewEvent = props => {
  const userState = useSelector(state => state.userReducer);
  const eventsState = useSelector(state => state.eventsReducer);
  const history = useHistory();
  const [values, handleChanges, resetForm] = useForm(initialFormValues);
  const [currentStep, setCurrentStep] = useState('');
  const dispatch = useDispatch();
  const [data, moveData, error] = useAPI({
    method: 'post',
    url: '/event',
    data: {
      ...values,
      user_id: userState.user.id,
    },
  });
  //   console.log(userState.user.id);
  const postEvent = () => {
    dispatch({ type: ADD_EVENT_START });
    moveData()
      .then(res => {
        console.log(res);
        const newEvent = {
          ...res,
          event_id: res.id,
          menu_items: [],
          guests: [],
        };
        dispatch({
          type: ADD_EVENT_SUCCESS,
          payload: newEvent,
        });
        resetForm();
        setCurrentStep('two');
        history.push('/dashboard/new-event/step-two');
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ADD_EVENT_ERROR, payload: err });
      });
  };

  const submit = e => {
    e.preventDefault();
    postEvent();
  };

  return (
    <section>
      {!eventsState.editing && null}
      <CreateEventProgressBar />
      {currentStep === 'two' ? (
        <StepTwoContainer setCurrentStep={setCurrentStep} />
      ) : currentStep === 'three' ? (
        <StepThreeContainer setCurrentStep={setCurrentStep} />
      ) : (
        <RenderCreateNewEventPage
          values={values}
          handleChanges={handleChanges}
          loading={eventsState.loading}
          submit={submit}
        />
      )}
      ;
    </section>
  );
};

export default CreateNewEvent;
