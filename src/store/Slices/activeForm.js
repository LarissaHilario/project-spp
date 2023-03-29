import { createSlice } from '@reduxjs/toolkit';

export const activeFormSlice = createSlice({
  name: 'activeForm',
  initialState: {
    active: {},
  },
  reducers: {
    addActiveForm: (state, action) => {
      state.active = action.payload.activeForm;
    },
    cleanForm: state => {
      state.active = {};
    },
  },
});

// Action creators are generated for each case reducer function
export const { addActiveForm, cleanForm } = activeFormSlice.actions;
