export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';
export const ADD_EVENT_START = 'ADD_EVENT_START';
export const ADD_EVENT_SUCCESS = 'ADD_EVENT_SUCCESS';
export const ADD_EVENT_ERROR = 'ADD_EVENT_ERROR';

const initialState = {
  events: [],
  loading: false,
  error: '',
};

export const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EVENT_START:
      return {
        events: [],
        loading: true,
        error: '',
      };
    case ADD_EVENT_SUCCESS:
      return {
        events: action.payload,
        loading: false,
        error: '',
      };
    case ADD_EVENT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
