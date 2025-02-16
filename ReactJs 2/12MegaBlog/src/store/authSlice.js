import { createSlice } from "@reduxjs/toolkit";

const initialState={
    status:false,
    userData:null
}

const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.status=true;
            state.userData=action.payload.userData;
        },
        logout:(state)=>{
            state.status=false;
            state.userData=null;
        }
    }
})
// user authenticate hai ya nhi ye har baar store se puchne
// ke liye
export const {login,logout}=authSlice.actions;
export default authSlice.reducer;