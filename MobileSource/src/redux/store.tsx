import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware, { ThunkAction } from 'redux-thunk';
import EventsReducer from './reducers/events';

declare module 'redux' {
  interface Dispatch<A extends Action = AnyAction> {
    <S, E, R>(asyncAction: ThunkAction<R, S, E, A>): R;
  }
}
export const store = configureStore({
  reducer: {
    eventsReducer: EventsReducer,
  },
  middleware: [thunkMiddleware],
});

export default store;
