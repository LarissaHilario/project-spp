import { configureStore } from '@reduxjs/toolkit';

import { activeFormSlice } from './Slices/activeForm';
import { authSlice } from './Slices/authSlice';
import { PacientesSlice } from './Slices/patientsSlice';


export const store = configureStore({
  reducer: {
    authState: authSlice.reducer,
    patients: PacientesSlice.reducer,
    activeForm: activeFormSlice.reducer,
  },
});
