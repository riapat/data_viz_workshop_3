import {createSlice} from '@reduxjs/toolkit';

export const recordSlice = createSlice({
    //naming the slice
    name: 'record',
    // initial state of the slice
    initialState: {
        record: {},
        records: [],
        status: 'idle',
        error: null,
    },
    // reducers are functions that handle state changes
    reducers: {
        // state is the current state of the slice
        //payload is the action object
        setRecord: (state, action) => {
            state.record = action.payload;
        },
        setRecords: (state, action) => {
            state.records.push(action.payload);
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        updateRecords: (state, action) => {
            const index = action.payload.index;
            if (index !== undefined && index >=0 && index < state.records.length) {
                state.records[index] = action.payload.record;
            }
        },
    },
});

export const {setRecord, setRecords, setError, updateRecords} = recordSlice.actions;

export default recordSlice.reducer;