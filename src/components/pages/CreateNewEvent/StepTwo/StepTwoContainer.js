import React, { useEffect } from 'react';
import RenderStepTwo from './RenderStepTwoPage';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from '../../../../hooks/useForm';
import { useAPI } from '../../../../hooks/useAPI';

const initialFormValues = {
  menu_items: [
    {
      item_name: '',
    },
  ],
};
//id: eventsState.events.id
const StepTwoContainer = props => {
  const eventsState = useSelector(state => state.eventsReducer);
  const history = useHistory();
  const [values, handleChanges, resetForm, setValues] = useForm(
    initialFormValues
  );
  const [data, moveData, error] = useAPI({
    method: 'post',
    url: '/menu',
    data: {
      menu_items: [
        {
          item_name: values.item_name,
        },
      ],
      id: eventsState.events.id,
    },
  });
  useEffect(() => {
    console.log(values);
  }, [values]);
  const postItem = () => {
    moveData()
      .then(res => {
        console.log(res);
        resetForm();
        props.setCurrentStep('three');
        history.push('/dashboard/new-event/step-two');
      })
      .catch(err => {
        console.log(err);
      });
  };

  const submit = e => {
    e.preventDefault();
    postItem();
  };

  const menuItems = () => {
    console.log(values.menu_items);
    // setValues({
    //   ...values.menu_items,
    //   menu_items: [...values.menu_items, values.menu_items.item_name],
    // });
  };

  return (
    <section>
      <RenderStepTwo
        value={values}
        handleChanges={handleChanges}
        loading={eventsState.loading}
        submit={submit}
      />
    </section>
  );
};

export default StepTwoContainer;
