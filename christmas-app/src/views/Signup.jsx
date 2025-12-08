import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import SignupViewModel from "../viewmodels/SignupViewModel";

export default function Signup() {
  const navigate = useNavigate();
  const vm = new SignupViewModel();

  const [isSubmit, setIsSubmit] = useState(false);
  const [message, setMessage] = useState("");

  const [formInput, setFormInput] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const [formError, setFormError] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  // Load all users first (same as your old getUser)
  useEffect(() => {
    vm.loadAllUsers();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = vm.validateFormInput(formInput);
    setFormError(errors);

    if (Object.keys(errors).length === 0) {
      const created = await vm.createUser(formInput);

      if (created) {
        setMessage("Form is submitted successfully!");
        setTimeout(() => {
          navigate("/Signin");
        }, 800);
      }
    } else {
      setMessage("Please fix the errors above before submitting.");
    }
  };

  return (
    <div className="signup-bg">
      <form onSubmit={handleSubmit}>
        <div id="form-container">
          <div className="form-card">
            <h1 className="Title">Login/Signup </h1>
            <div className="Input-container">
              <label htmlFor="firstName"> First Name:</label>
              <br />
              <input
                type="text"
                id="firstName"
                className="form-input"
                name="firstName"
                value={formInput.firstName}
                placeholder="First Name"
                onChange={handleChange}
              />
              <p>{formError.firstName}</p>

              <label htmlFor="lastName">Last Name:</label>
              <br />
              <input
                type="text"
                id="lastName"
                className="form-input"
                name="lastName"
                value={formInput.lastName}
                placeholder="Last Name"
                onChange={handleChange}
              />
              <p>{formError.lastName}</p>

              <label htmlFor="userName">UserName:</label>
              <br />
              <input
                type="text"
                id="userName"
                className="form-input"
                name="userName"
                value={formInput.userName}
                placeholder="UserName"
                onChange={handleChange}
              />
              <p>{formError.userName}</p>

              <label htmlFor="password">Password:</label>
              <br />
              <input
                type="password"
                id="password"
                className="form-input"
                name="password"
                value={formInput.password}
                placeholder="Password"
                onChange={handleChange}
              />
              <p>{formError.password}</p>

              <label htmlFor="confirmPassword">Confirm Password:</label>
              <br />
              <input
                type="password"
                id="confirmPassword"
                className="form-input"
                name="confirmPassword"
                value={formInput.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter password"
              />
              <p>{formError.confirmPassword}</p>
            </div>

            <button type="submit" className="btn">
              Create an account
            </button>

            <p id="account">
              Already have an account? <a href="/Signin">Login</a>
            </p>

            <div className="msg">{message && <p>{message}</p>}</div>
          </div>
        </div>
      </form>
    </div>
  );
}
