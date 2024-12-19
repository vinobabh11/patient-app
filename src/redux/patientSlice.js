import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  patientData: {},
};

const patientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {
    updatePatientData: (state, action) => {
      state.patientData = { ...state.patientData, ...action.payload };
    },
  },
});

export const { updatePatientData } = patientSlice.actions;
export default patientSlice.reducer;
