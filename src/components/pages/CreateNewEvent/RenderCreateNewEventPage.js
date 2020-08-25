import React from 'react';
import { states } from '../../../constants';
import Dropdown from '../../../components/common/Dropdown';

const RenderCreateNewEventPage = props => (
  <section>
    <h1>Let's Create Your Event</h1>
    <div className="newEventProgress">
      {/* Progress bar container */}
      <div>
        <h4>STEP 1</h4>
      </div>
      <div>
        <h4>STEP 2</h4>
      </div>
      <div>
        <h4>STEP 3</h4>
      </div>
    </div>
    <form onSubmit={props.submit}>
      <div className="formContainer">
        <div className="formColumn">
          <h2>Event Address</h2>
          <input
            type="text"
            name="address_one"
            placeholder="Address Line One"
            value={props.values.address_one}
            onChange={props.handleChanges}
          />
          <input
            type="text"
            name="address_two"
            placeholder="Address Line Two"
            value={props.values.address_two}
            onChange={props.handleChanges}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={props.values.city}
            onChange={props.handleChanges}
          />
          <Dropdown
            data={states}
            name="state"
            value={props.values.state}
            onChange={props.handleChanges}
          />
          <input
            type="text"
            name="zip"
            placeholder="Zip"
            value={props.values.zip}
            onChange={props.handleChanges}
          />
        </div>
        <div className="formColumn">
          <h2>Event Details</h2>
          <input
            type="text"
            name="event_title"
            placeholder="Event Title"
            value={props.values.event_title}
            onChange={props.handleChanges}
          />
          <input
            type="text"
            name="contact_phone"
            placeholder="Contact Phone"
            value={props.values.contact_phone}
            onChange={props.handleChanges}
          />
          <input
            type="date"
            name="date"
            placeholder="Event Date"
            value={props.values.date}
            onChange={props.handleChanges}
          />
          <div>
            <input
              type="text"
              name="start_time"
              placeholder="Start Time"
              value={props.values.start_time}
              onChange={props.handleChanges}
            />
            <input
              type="text"
              name="end_time"
              placeholder="Start Time"
              value={props.values.end_time}
              onChange={props.handleChanges}
            />
            <textarea
              height="5"
              name="special_instructions"
              placeholder="Special instructions..."
              value={props.values.special_instructions}
              onChange={props.handleChanges}
            />
            <div>
              {!props.loading ? (
                <button>Next Step</button>
              ) : (
                <button disabled>Loading...</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </form>
  </section>
);

export default RenderCreateNewEventPage;
