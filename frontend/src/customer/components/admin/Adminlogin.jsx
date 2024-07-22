import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { adminlogin } from "../../../services/authServices";

function Adminlogin() {
  const initialValues = { email: "", password: "" };
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
    setIsSubmit(true);
  
    const userData = {
      email: formValues.email,
      password: formValues.password,
    };
  
    try {
      const errors = validate(formValues);
      setFormErrors(errors);
  
      if (Object.keys(errors).length === 0) {
        const data = await adminlogin(userData);
        console.log(data);
        navigate("/admin");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  

  const handleSubmitForm = async () => {
    const userData = {
      email: formValues.email,
      password: formValues.password,
    };

    try {
      const data = await adminlogin(userData);
      console.log(data);
      
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      handleSubmitForm();
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
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
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Admin Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
              className={`form-input mt-1 block w-full ${formErrors.email ? 'border-red-500' : ''}`}
            />
            {formErrors.email && <p className="text-red-500 mt-1">{formErrors.email}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
              className={`form-input mt-1 block w-full ${formErrors.password ? 'border-red-500' : ''}`}
            />
            {formErrors.password && <p className="text-red-500 mt-1">{formErrors.password}</p>}
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">LogIn</button>
        </form>
      </div>
    </div>
  );
}

export default Adminlogin;
