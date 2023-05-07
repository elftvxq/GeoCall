import { configureStore } from '@reduxjs/toolkit';
import mapReducer from '../store/MapPage/mapSlice';

const store = configureStore({
  reducer: {
    map: mapReducer,
  },
});

export default store;
