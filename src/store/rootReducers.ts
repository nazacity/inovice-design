import { combineReducers } from 'redux';
import layoutReducer from './slices/layoutSlice';

const rootReducer = combineReducers({
  layout: layoutReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
