
import { createSlice } from '@reduxjs/toolkit';
const authSlice = createSlice({
    name:"auth",
    initialState:{
        loading:false
    },
    reducers:{
        // action 
        setLoading(state, action) {
            set.loading = action.payload;
        }
    }
});
export const {setLoading} = authSlice.actions;
export default authSlice;