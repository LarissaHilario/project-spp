import { createSlice } from '@reduxjs/toolkit';

export const PacientesSlice = createSlice({
  name: 'patientes',
  initialState: {
    patients: null,
    total: 0,
  },
  reducers: {
    chargeerPatients: (state, action) => {
      state.patients = action.payload.patients;
      state.total = state.patients.length;  
    },
    cleanPatients: state => {
      state.patients = null;
      state.total = 0;
     
    },
  },
});

// Action creators are generated for each case reducer function
export const { chargeerPatients, cleanPatients } = PacientesSlice.actions;
