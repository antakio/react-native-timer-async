import * as API from '../../api/api';
import { AxiosResponse } from 'axios';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { AppDispatch, IRootState } from '../../config/types';

// Event ActionTypes
export const GET_EVENTS_REQUEST = 'events/GET_EVENTS_REQUEST';
export const GET_EVENTS_SUCCESS = 'events/GET_EVENTS_SUCCESS';
export const GET_EVENTS_FAIL = 'events/GET_EVENTS_FAIL';

export const SET_ENABLE_TIMER = 'events/SET_ENABLE_TIMER';

// Event Actions
export const setEnableTimer = (value: boolean | null) => {
  return (dispatch: (arg0: { type: string; payload: boolean | null }) => void) => {
    console.log('setEnableTimer', value);
    dispatch({
      type: SET_ENABLE_TIMER,
      payload: value,
    });
  };
};

export const fetchEventsIfNeeded =
  (params: string) => (dispatch: AppDispatch, getState: () => IRootState) => {
    if (shouldFetchEvents(getState())) {
      return dispatch(fetchEvents(params));
    }
  };
const shouldFetchEvents = (state: IRootState) => {
  const events = state.eventsReducer;
  if (!events?.items || !events?.error) {
    return true;
  }
  return false;
};

const fetchEvents = (params: string) => async (dispatch: Dispatch<AnyAction>) => {
  dispatch({ type: GET_EVENTS_REQUEST });
  try {
    const response: AxiosResponse<unknown> = await API.getEvents(params);
    if (response.status !== 200) {
      dispatch({ type: GET_EVENTS_FAIL, payload: response.statusText });
    } else {
      dispatch({ type: GET_EVENTS_SUCCESS, payload: response.data });
    }
  } catch (err) {
    dispatch({ type: GET_EVENTS_FAIL, payload: err });
  }
};
