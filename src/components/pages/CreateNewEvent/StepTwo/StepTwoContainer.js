import React, { useState } from 'react';
import RenderStepTwo from './RenderStepTwoPage';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from '../../../../hooks/useForm';
import { useAPI } from '../../../../hooks/useAPI';
import {
  ADD_ITEM_START,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_ERROR,
  DELETE_ITEM,
} from '../../../../state/reducers/eventsReducer';
import { axiosWithAuth } from '../../../../utils/axiosWithAuth';

const initialFormValues = {
  item_name: '',
};

const StepTwoContainer = props => {
  const eventsState = useSelector(state => state.eventsReducer);
  const history = useHistory();
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [editID, setEditID] = useState('');
  const [buttonText, setButtonText] = useState('ADD ITEM');
  const [values, handleChanges, resetForm, setValues] = useForm(
    initialFormValues
  );
  const [data, moveData, error] = useAPI({
    method: 'post',
    url: '/menu',
    data: {
      item_name: values.item_name,
      event_id: eventsState.currentEvent.id,
    },
  });
  const [dataPut, putData, errorPut] = useAPI({
    method: 'put',
    url: `/menu/${editID}`,
    data: {
      item_name: values.item_name,
    },
  });

  const postItem = () => {
    dispatch({ type: ADD_ITEM_START });
    moveData()
      .then(res => {
        const new_item = {
          event_id: res.event_id,
          id: res.id,
          item_name: res.item_name,
        };
        dispatch({
          type: ADD_ITEM_SUCCESS,
          payload: new_item,
        });
        resetForm();
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ADD_ITEM_ERROR, payload: err });
      });
  };

  const putItem = () => {
    dispatch({ type: ADD_ITEM_START });
    putData()
      .then(res => {
        console.log(res);
        const new_item = {
          event_id: res.event_id,
          id: res.id,
          item_name: res.item_name,
        };
        dispatch({
          type: ADD_ITEM_SUCCESS,
          payload: new_item,
        });
        setEditing(false);
        setButtonText('ADD ITEM');
        resetForm();
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ADD_ITEM_ERROR, payload: err });
      });
  };

  const submit = e => {
    e.preventDefault();
    !editing ? postItem() : putItem();
  };

  const editItem = e => {
    dispatch({ type: DELETE_ITEM, payload: e.id });
    setEditID(e.id);
    setEditing(true);
    setButtonText('SAVE ITEM');
    setValues({
      item_name: e.item_name,
    });
  };

  const deleteItem = e => {
    axiosWithAuth()
      .delete(`/menu/${e}`)
      .then(res => {
        dispatch({ type: DELETE_ITEM, payload: e });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ADD_ITEM_ERROR, payload: err });
      });
  };

  const nextStep = () => {
    props.setCurrentStep('three');
    history.push('/dashboard/new-event/step-three');
  };

  return (
    <section>
      <RenderStepTwo
        value={values.item_name}
        handleChanges={handleChanges}
        loading={eventsState.loading}
        submit={submit}
        state={eventsState.currentEvent.menu_items}
        buttonText={buttonText}
        editItem={editItem}
        deleteItem={deleteItem}
        nextStep={nextStep}
      />
    </section>
  );
};

export default StepTwoContainer;
