import { combineReducers } from 'redux';

import { petSlice } from './slices/pet-store';
import { uiSlice } from './slices/ui';

const rootReducer = {
  petStore: combineReducers({
    pet: petSlice.reducer
  }),
  ui: uiSlice.reducer
};

export default rootReducer;
