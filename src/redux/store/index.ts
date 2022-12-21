import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../slice';

/**
 * Creates a store and includes all the slices as reducers.
 */

const store = configureStore({
  reducer: rootReducer,
});

export default store;
