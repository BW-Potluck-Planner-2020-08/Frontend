import React from 'react';

const RenderStepTwo = props => (
  <section>
    <form onSubmit={props.submit}>
      <div className="formContainer">
        <div className="formColumn">
          <h2>What should guests bring?</h2>
          <input
            type="text"
            name="item_name"
            placeholder="Enter an item for guests to bring"
            value={props.values}
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
        <div className="formColumn"></div>
      </div>
    </form>
  </section>
);

export default RenderStepTwo;
