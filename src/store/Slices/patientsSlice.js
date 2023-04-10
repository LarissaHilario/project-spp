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
      state.temp=state.patients.temperature;

    },
    cleanPatients: state => {
      state.patients = null;
      state.total = 0;
      state.temp=0
     
    },

    getUserbyId: (state, action) =>{
      state.userId= action.payload;
      return state.users.find((user) => user.id === userId);
    }
  },
});

// Action creators are generated for each case reducer function
export const { chargeerPatients, cleanPatients, getUserbyId } = PacientesSlice.actions;
