import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAPI } from '../../hooks/useAPI';
import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
  DELETE_EVENT,
  ADD_ITEM_ERROR,
} from '../../state/reducers/eventsReducer';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

const DashboardHost = () => {
  const eventsState = useSelector(state => state.eventsReducer);
  const dispatch = useDispatch();
  const [data, moveData, error] = useAPI({
    method: 'get',
    url: '/event',
    data: {},
  });

  useEffect(() => {
    dispatch({ type: FETCH_DATA_START });
    moveData()
      .then(res => {
        dispatch({ type: FETCH_DATA_SUCCESS, payload: res });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: FETCH_DATA_ERROR, payload: err });
      });
  }, []);

  const deleteEvent = e => {
    axiosWithAuth()
      .delete(`/event/${e.id}`)
      .then(res => {
        dispatch({ type: DELETE_EVENT, payload: e.id });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ADD_ITEM_ERROR, payload: err });
      });
  };

  return (
    <section>
      <h2>Events You're Hosting</h2>
      <ul>
        {eventsState.events.map(event => (
          <li key={event.event_id}>
            <span className="itemList">
              <span
                className="delete"
                onClick={e => {
                  e.stopPropagation();
                  deleteEvent(event);
                }}
              >
                X&nbsp;&nbsp;
              </span>
              {event.event_title}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DashboardHost;
