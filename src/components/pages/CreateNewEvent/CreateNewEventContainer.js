import React from 'react';
import { useForm } from '../../../hooks/useForm';

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

  return (
    <RenderCreateNewEventPage values={values} handleChanges={handleChanges} />
  );
};

export default CreateNewEvent;
