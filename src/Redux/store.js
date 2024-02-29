// store.js
import { configureStore } from '@reduxjs/toolkit';
import placesReducer from './places/placesSlice';
import addPlaceReducer from './places/addPlaceSlice';

export default configureStore({
  reducer: {
    places: placesReducer,
    addplace: addPlaceReducer,
  },
});