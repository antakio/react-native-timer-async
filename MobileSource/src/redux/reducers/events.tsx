import { ActionWithPayload, EventObject, EventsState } from '../../config/types';
import * as ActionTypes from '../actions/events';

const initialState: EventsState = {
  items: [],
  error: null,
  isLoading: null,
  timer: true,
};

const EventsReducer = (state = initialState, action: ActionWithPayload<EventObject[]>) => {
  switch (action.type) {
    case ActionTypes.GET_EVENTS_REQUEST:
      return { ...state, items: [], error: null, isLoading: true };
    case ActionTypes.GET_EVENTS_SUCCESS:
      return { ...state, items: action.payload, isLoading: false, error: null };
    case ActionTypes.GET_EVENTS_FAIL:
      return { ...state, error: action.payload, isLoading: false };
    case ActionTypes.SET_ENABLE_TIMER:
      if (typeof action.payload === 'boolean') {
        return { ...state, timer: action.payload };
      }
      return { ...state };
    default:
      return state;
  }
};

export default EventsReducer;
