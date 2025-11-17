<<<<<<< HEAD
import React, { useState } from "react";
        <li> <a href="" > </a></li>
import { useNavigate } from "react-router-dom";
import "../styles.css";
//api url inssert here 
>>>>>>> Gracie
export default function Signup() {
  const navigate = useNavigate();
  //Use States()
  const [isSubmit, setIsSubmit] = useState(false);
  const [message, setMessage] = useState("");
  const [formInput, setFormInput] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });
<<<<<<< HEAD

  //Input changes it triggers this handler
  const handleChange = (e) => {
    const { name, value } = e.target; //grabs the the name and the value that is being targeted
    setFormInput({
      ...formInput,
      [name]: value, //copies the current input values and placing
      // them in a new object so that they are not deleted/removed,
      // while updating the the inputbox that the user has typed in.
    });
  };
  //Another useState only for updating errors
  const [formError, setFormError] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });
  //Helper Function-Checks to see if username is valid
  const isValidUsername = (userName) => {
    const validUserName = "@";
    if (userName.includes("@")) {
      return true;
    } else {
      return false;
    }
  };
  const validateFormInput = () => {
    let errors = {}; //Variable holds an empty object
    if (!formInput.firstName) {
      errors.firstName = "Name is required!";
    }
    if (!formInput.lastName) {
      errors.lastName = "Name is required!";
    }
    if (!formInput.userName) {
      errors.userName = "Username is required!";
    } else if (!isValidUsername(formInput.userName)) {
      errors.userName = "Username must contain '@'";
    }
    if (!formInput.password) {
      errors.password = "Password is required";
    }
    if (!formInput.confirmPassword) {
      errors.confirmPassword = "Password needs confirmaton"; //Confirm password is required
    } else if (formInput.confirmPassword !== formInput.password) {
      errors.confirmPassword = " Error! Password Needs to Match";
    }
    setFormError(errors); // updates newerrors ovrrides the old form error and stores the value into setformerror.
    return errors; //returns
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateFormInput(); //calls this function and assigns it to var :is valid
    if (Object.keys(isValid).length === 0) {
      //if one or more of the fields are empty it will dislay a message
      setMessage("Form is submitted Sucessfully!");
      navigate("/Signin");
    } else {
      setMessage("Please fix any errors above before submitting ");
    }
    //adding api route - adding users the database
  };
  return (
    <form onSubmit={handleSubmit}>
      <div id="form-container">
        <div className="form-card">
          <h1 className="Title">Login/Signup </h1>
          <div className="Input-container">
            <label for="firstName"> First Name:</label>
            <br></br>
            <input
              type="text"
              id="firstName"
              className="form-input"
              name="firstName"
              value={formInput.firstName}
              placeholder="First Name"
              onChange={handleChange}
            />
            <br></br>
            <p>{formError.firstName}</p>
            <label for="lastName">LastName:</label>
            <br></br>
            <input
              type="text"
              id="lastName"
              className="form-input"
              name="lastName"
              value={formInput.lastName}
              placeholder="Last Name"
              onChange={handleChange}
            />
            <br></br>
            <p>{formError.lastName}</p>
            <label for="userName"> UserName:</label>
            <br></br>
            <input
              type="text"
              id="userName"
              className="form-input"
              name="userName"
              value={formInput.userName}
              placeholder="UserName"
              onChange={handleChange}
            />
            <br></br>
            <p>{formError.userName}</p>
            <label for="password"> Password:</label>
            <br></br>
            <input
              type="password"
              id="password"
              className="form-input"
              name="password"
              value={formInput.password}
              placeholder="Password"
              onChange={handleChange}
            />
            <br></br>
            <p>{formError.password}</p>
            <label for="confirmPassword"> ConfirmPassword:</label>
            <br></br>
            <input
              type="password"
              id="confirmPassword"
              className="form-input"
              name="confirmPassword"
              value={formInput.confirmPassword}
              onChange={handleChange}
              placeholder="Re-Enter password"
            />{" "}
            <br></br>
            <p>{formError.confirmPassword}</p>
          </div>
          <button type="submit" className="btn">
            Create an account{" "}
          </button>
          <p id="account">
            {" "}
            Already have an account? <a href="/Signin">Login</a>{" "}
          </p>
          <div classname="msg">
            {message && (
              <p>{message}</p> // if message isnt empty show the message
            )}
          </div>
        </div>
      </div>
    </form>
=======
//Helper Function-Checks to see if username is valid
const isValidUsername = (userName) => {
  const validUserName = "@";
  if(userName.includes("@")){
  return true;
  }else{
  return false;
  }
}
const validateFormInput = () => {
let errors = {}; //Variable holds an empty object 
if(!formInput.firstName){
  errors.firstName = "Name is required!";
} 
if(!formInput.lastName){
  errors.lastName = "Name is required!";
}
if(!formInput.userName){
  errors.userName = "Username is required!";
}else if(!isValidUsername(formInput.userName)){
  errors.userName = "Username must contain '@'";
}
if(!formInput.password){
  errors.password = "Password is required";
}
if(!formInput.confirmPassword){
  errors.confirmPassword = "Password needs confirmaton"; //Confirm password is required
}else if (formInput.confirmPassword !== formInput.password){
  errors.confirmPassword = " Error! Password Needs to Match";
}
setFormError(errors); // updates newerrors ovrrides the old form error and stores the value into setformerror.
return errors; //returns
}
const handleSubmit = (e) =>{
  e.preventDefault();
  
  const isValid = validateFormInput(); //calls this function and assigns it to var :is valid
  if(Object.keys(isValid).length === 0){ //if one or more of the fields are empty it will dislay a message
    setMessage("Form is submitted Sucessfully!");
      navigate("/Signin");
  }else{
    setMessage("Please fix any errors above before submitting ");
  }
 //adding api route - adding users the database
}
  return (
    <div className="signup-bg">
      <form onSubmit={handleSubmit}>
        <div className="form-card">
          <h1 className="Title">Create an Account</h1>

          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            className="form-input"
            name="firstName"
            value={formInput.firstName}
            placeholder="Enter first name"
            onChange={handleChange}
          />
          <p>{formError.firstName}</p>

          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            className="form-input"
            name="lastName"
            value={formInput.lastName}
            placeholder="Enter last name"
            onChange={handleChange}
          />
          <p>{formError.lastName}</p>

          <label htmlFor="userName">Username:</label>
          <input
            type="text"
            id="userName"
            className="form-input"
            name="userName"
            value={formInput.userName}
            placeholder="Enter username"
            onChange={handleChange}
          />
          <p>{formError.userName}</p>

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            className="form-input"
            name="password"
            value={formInput.password}
            placeholder="Enter password"
            onChange={handleChange}
          />
          <p>{formError.password}</p>

          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            className="form-input"
            name="confirmPassword"
            value={formInput.confirmPassword}
            placeholder="Re-enter password"
            onChange={handleChange}
          />
          <p>{formError.confirmPassword}</p>

          <button type="submit" className="btn">
            Create Account
          </button>

          <p id="account">
            Already have an account?  <a href="/signin">Login</a>
          </p>

          {message && <p className="msg">{message}</p>}
        </div>
      </form>
    </div>
>>>>>>> Gracie
  );
}
