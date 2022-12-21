import { combineReducers } from 'redux';
import homeSlice from '../slice/home/homeSlice';

export const rootReducer = combineReducers({
  nftsCollection: homeSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
