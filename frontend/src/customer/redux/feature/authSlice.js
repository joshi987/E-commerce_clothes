import { createSlice } from "@reduxjs/toolkit";
const name = JSON.parse(localStorage.getItem("name"));
const initialState ={
    isLoggedIn: false,
    name: name ? name : "",
    user:{
        name:"",
        email:"",
        photo:"",
        phone:""
    }
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        SET_LOGIN(state, action) {
            state.isLoggedIn = action.payload;
        },
        SET_NAME(state, action) {
            localStorage.setItem("name", JSON.stringify(action.payload));
            state.name = action.payload;
        },
        SET_USER(state, action) {
            const Profile = action.payload;
            state.user.name = Profile.name;
            state.user.email = Profile.email; // <-- Corrected from state.user.name to state.user.email
            state.user.phone = Profile.phone;
            state.user.photo = Profile.photo;
        }
    },
});

 export const {SET_LOGIN, SET_NAME, SET_USER} = authSlice.actions;

 export const setIsLoggedIn = (state)=>state.auth.isLoggedIn
 export const setName = (state)=>state.auth.name;
 export const setEmail = (state)=>state.auth.email;
 export const phone = (state)=>state.auth.phone;
 export const photo  = (state)=>state.auth.photo;


export default authSlice.reducer;