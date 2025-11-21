import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Signin.css";

export default function Signin() {
  const navigate = useNavigate();

  const[formInput,setFormInput] = useState({
    userName:"",
    password:""
  })
  const[loginError, setLoginError] = useState({
    userName:"",
    password:""
  })
  const[message, setMessage] = useState("");

  const handleChange = (e) =>{
  const{name, value} = e.target;
   setFormInput({...formInput, [name]:value

   });
  }
  const handleSubmit = (e) =>{
  e.preventDefault();
  
  const isValid = validateLoginInput();
  
  if(Object.keys(isValid).length === 0){
    setMessage("Login  is Sucessful!");
    navigate("/dashboard");
  }else{
    setMessage("Invalid Username/Password");
  }
  // < = api/login verifying if thw password and username is correct. will insert more stuff here =>
  }
  const isValidUsername = (userName) => {
  const validUserName = "@";
  if(userName.includes("@")){
  return true;
  }else{
  return false;
  }
}
  const validateLoginInput = () => {
    let errors = {};
    if(!formInput.userName){
  errors.userName = "Username is required!";
}else if(!isValidUsername(formInput.userName)){
  errors.userName = "Username must contain '@'";
}
if(!formInput.password){
  errors.password = "Password is required";
}
setLoginError(errors);
return errors;
  }
  return (
  <div className="signin-bg">
    <form onSubmit={handleSubmit}>
      <div className="form-card">
        <h2 className="Title-2">Sign In</h2>
        <label>User Name:</label>
        <br />
        <input
          type="text"
          id="userName"
          className="form-input"
          name="userName"
          value={formInput.userName}
          placeholder="User Name"
          onChange={handleChange}
        />
        <p>{loginError.userName}</p>

        <label>Password:</label>
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
        <p>{loginError.password}</p>

        <button type="submit" className="btn">Login</button>

        <p id="account">
          Need to create an account? <a href="/signup">Click here</a>
        </p>

        <div className="msg">
          {message && <p>{message}</p>}
        </div>
      </div>
    </form>
  </div>
);
}
