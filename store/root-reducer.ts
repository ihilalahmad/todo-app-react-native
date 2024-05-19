import { combineReducers } from '@reduxjs/toolkit';
import reducer from './slices/todoSlice';

const reducers = combineReducers({
  todosReducer: reducer,
});

export default reducers;
