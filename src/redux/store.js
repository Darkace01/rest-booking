import { configureStore } from '@reduxjs/toolkit';
import restaurantSlice from './features/restaurantSlice';

export const store = configureStore({
  reducer: {
    restaurant: restaurantSlice,
  },
});
