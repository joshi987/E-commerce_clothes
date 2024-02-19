import { useState, useEffect } from "react";
import "./account.css";
import { registerUser } from "../../../services/authServices";
import { useNavigate } from "react-router-dom";

function CreateAccount() {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues)); //first class citizens
    setIsSubmit(true);

    const userData = {
      name: formValues.username,
      email: formValues.email,
      password: formValues.password,
    };

    try {
      const data = await registerUser(userData);
      console.log(data);
        navigate("/sign"); 

    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CreateAccount;

// import  { useState } from "react";
// import styles from "../createAccount/auth.module.scss"
// import { TiUserAddOutline } from "react-icons/ti";
// // import Card from "../../components/card/Card";
// import { toast } from "react-toastify";

// // import { useDispatch } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// // import { SET_LOGIN, SET_NAME } from "../../redux/features/auth/authSlice";
// // import { registerUser,validateEmail } from "../../../services/authServices";
// // import Loader from "../../components/loader/Loader";

// const initialState = {
//   name: "",
//   email: "",
//   password: "",
//   password2: "",
// };

// const CreateAccount = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   // const [isLoading, setIsLoading] = useState(false);
//   const [formData, setformData] = useState(initialState);
//   const { name, email, password, password2 } = formData;

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setformData({ ...formData, [name]: value });
//   };

//   const register = async (e) => {
//     e.preventDefault();

//     if (!name || !email || !password) {
//       return toast.error("All fields are required");
//     }
//     if (password.length < 6) {
//       return toast.error("Passwords must be up to 6 characters");
//     }
//     if (!validateEmail(email)) {
//       return toast.error("Please enter a valid email");
//     }
//     if (password !== password2) {
//       return toast.error("Passwords do not match");
//     }

//     const userData = {
//       name,
//       email,
//       password,
//     };
//     // setIsLoading(true);
//     try {
//       const data = await registerUser(userData);
//       // console.log(data);
//       await dispatch(SET_LOGIN(true));
//       await dispatch(SET_NAME(data.name));
//       navigate("/dashboard");
//       // setIsLoading(false);
//     } catch (error) {
//       // setIsLoading(false);
//     }
//   };

//   return (
//     <div className={`container ${styles.auth}`}>
//       {/* {isLoading && <Loader />} */}
//       <Card>
//         <div className={styles.form}>
//           <div className="--flex-center">
//             <TiUserAddOutline size={35} color="#999" />
//           </div>
//           <h2>Register</h2>

//           <form onSubmit={register}>
//             <input
//               type="text"
//               placeholder="Name"
//               required
//               name="name"
//               value={name}
//               onChange={handleInputChange}
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               required
//               name="email"
//               value={email}
//               onChange={handleInputChange}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               required
//               name="password"
//               value={password}
//               onChange={handleInputChange}
//             />
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               required
//               name="password2"
//               value={password2}
//               onChange={handleInputChange}
//             />
//             <button type="submit" className="--btn --btn-primary --btn-block">
//               Register
//             </button>
//           </form>

//           <span className={styles.register}>
//             <Link to="/">Home</Link>
//             <p> &nbsp; Already have an account? &nbsp;</p>
//             <Link to="/login">Login</Link>
//           </span>
//         </div>
//       </Card>
//     </div>
//   );
// };

// export default CreateAccount;