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
        },
        closeNavBar(state){
            state.isOpen = false
        }
    }
})

export const {navBarChange, closeNavBar} = navBarSlice.actions
export default navBarSlice.reducer