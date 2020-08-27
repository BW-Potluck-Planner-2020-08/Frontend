export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';
export const ADD_EVENT_START = 'ADD_EVENT_START';
export const ADD_EVENT_SUCCESS = 'ADD_EVENT_SUCCESS';
export const ADD_EVENT_ERROR = 'ADD_EVENT_ERROR';
export const ADD_ITEM_START = 'ADD_ITEM_START';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_ERROR = 'ADD_ITEM_ERROR';
export const EDIT_ITEM = 'EDIT_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

const initialState = {
  events: [],
  currentEvent: '',
  loading: false,
  error: '',
};

export const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EVENT_START:
      return {
        ...state,
        loading: true,
      };
    case ADD_EVENT_SUCCESS:
      return {
        ...state,
        events: [action.payload],
        currentEvent: action.payload,
        loading: false,
      };
    case ADD_EVENT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADD_ITEM_START:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        events: state.events.map(event => {
          //   console.log(event);
          if (event.event_id === action.payload.event_id) {
            delete action.payload.event_id;
            return {
              ...event,
              menu_items: [...event.menu_items, action.payload],
            };
          } else {
            return event;
          }
        }),
        currentEvent: {
          ...state.currentEvent,
          menu_items: [...state.currentEvent.menu_items, action.payload],
        },
        loading: false,
        error: '',
      };
    case ADD_ITEM_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_ITEM:
      return {
        ...state,
        events: state.events.map(event => {
          if (event.event_id === state.currentEvent.id) {
            return {
              ...event,
              menu_items: event.menu_items.filter(
                item => item.id !== action.payload
              ),
            };
          }
        }),
        currentEvent: {
          ...state.currentEvent,
          menu_items: state.currentEvent.menu_items.filter(
            item => item.id !== action.payload
          ),
        },
      };
    default:
      return state;
  }
};
