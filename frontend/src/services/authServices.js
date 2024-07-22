
import axios from "axios";
import { toast } from "react-toastify";
export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};


// Register User
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/users/register`,
      userData,
      { withCredentials: true }
    );
    if (response.statusText === "OK") {
      toast.success("User Registered successfully");
    }
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};


//login user

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/users/login`,
      userData,
      { withCredentials: true }
    );
    if (response.statusText === "OK") {
      console.log(response.data)
      //cache,cookies, localstorage, authentication vs autherization
     const token = response.data.token;
    //  window.location.reload();
     localStorage.setItem('token', token)
    //  console.log("here is your token");
    //  console.log(token)
      toast.success("Login Succesful...");
    }
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

//logout
export const loginOut = async () => {
  try {
    await axios.get(`${BACKEND_URL}/api/users/logout`);
    toast.success("Logout Succesful...");
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};


//adminlogin
export const adminlogin = async (userData) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/admins`,
      userData,
      { withCredentials: true }
    );
    if (response.statusText === "OK") {
      //set response to cookies
      const token = response.data.token;
      console.log("storeage");
      console.log(token);
      localStorage.getItem('token', token)
      console.log("admin login locakstorage")
      console.log(localStorage.getItem('token'))
      toast.success("Login Succesful...");
    }
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

export const getLoginStatus = async () =>{
  try {
    const response = await axios.get(
      `${BACKEND_URL}/api/users/loggedin`,
      { withCredentials: true }
    );

    return response.data;
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
}

//Get User Profile
export const getUserProfile = async () =>{
  try {
    const response = await axios.get(
      `${BACKEND_URL}/api/users/getuser`,
      { withCredentials: true }
    );

    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
}

//adminlogout

export const adminlogout = async (userData) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/log-out`,
      userData,
      { withCredentials: true }
    );
    if (response.statusText === "OK") {
      const token = response.data.token;
      localStorage.setItem('token', token)
      toast.success("Login out...");
    }
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};