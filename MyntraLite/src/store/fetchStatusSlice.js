// import { createSlice } from "@reduxjs/toolkit";

// const fetchStatusSlice = createSlice({
//     name: 'fetchStatus',
//     initialState: {
//         fetchDone: false, // false: PENDING and true: DONE
//         currentlyFetching: false,
//     },
//     reducers: {
//         markFetchDone: (state) => {
//             state.fetchDone = true; // Modify draft state directly
//         },
//         markFetchingStarted: (state) => {
//             state.currentlyFetching = true; // Modify draft state directly
//         },
//         markFetchingFinished: (state) => {
//             state.currentlyFetching = false; // Modify draft state directly
//         }
//     }
// });

// export const fetchStatusActions = fetchStatusSlice.actions;
// export default fetchStatusSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const fetchStatusSlice = createSlice({
  name: 'fetchStatus',
  initialState: {
    fetchDone: false,
    currentlyFetching: false,
  },
  reducers: {
    markFetchingStarted(state) {
      state.currentlyFetching = true;
    },
    markFetchDone(state) {
      state.fetchDone = true;
    },
    markFetchingFinished(state) {
      state.currentlyFetching = false;
    },
  },
});

export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice.reducer;

