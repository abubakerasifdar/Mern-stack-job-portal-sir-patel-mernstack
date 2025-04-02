import { createSlice } from '@reduxjs/toolkit';
const JobSlice = createSlice({
    name:"job",
    initialState:{
        AllJobs:[],
        SingleJobs:null,
    },
    reducers:{
        // action that we have to use in other pages 
        setAllJobs: (state, action)=>{
            state.AllJobs = action.payload;
        },
        setSingleJobs: (state, action) => {
            state.SingleJobs = action.payload;
        }
    }
})
export const {setAllJobs, setSingleJobs} = JobSlice.actions;
export default JobSlice.reducer;