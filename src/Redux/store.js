// configureStore is a function that takes a single argument: an object where the keys will be slice names, and the values are the slice reducers.  It returns a Redux store object.
import { configureStore } from "@reduxjs/toolkit";
import recordReducer from "./recordSlice";

const store = configureStore({
    // reducer is an object where the keys are the slice names, and the values are the slice reducers.
    // slices are the individual pieces of state in your Redux store.
  reducer: {
    //record is the name of the slice and recordReducer is the reducer function
    record: recordReducer,
  },
});

export default store;