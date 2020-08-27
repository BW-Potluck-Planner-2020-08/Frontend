import React from 'react';
import { useSelector } from 'react-redux';

const DashboardGuest = () => {
  const eventsState = useSelector(state => state.eventsReducer);
  return (
    <section>
      <h2>Events You're Attending</h2>
      <ul>
        {eventsState.events.map(event => (
          <li key={event.event_id}>
            <span className="itemList">
              <span
                className="delete"
                onClick={e => {
                  e.stopPropagation();
                  // props.deleteItem(item.id);
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

export default DashboardGuest;
