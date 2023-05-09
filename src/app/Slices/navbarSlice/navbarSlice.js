import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen : false
}
const navBarSlice = createSlice({
    name : "navBar",
    initialState,
    reducers : {
        navBarChange(state){
            state.isOpen = !state.isOpen;
        }
    }
})

export const {navBarChange} = navBarSlice.actions
export default navBarSlice.reducer