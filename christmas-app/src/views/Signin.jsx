import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Signin.css";
import SigninViewModel from "../viewmodels/SigninViewModel";

export default function Signin() {
  const navigate = useNavigate();
  const vm = new SigninViewModel();

  const [formInput, setFormInput] = useState({
    userName: "",
    password: ""
  });
  const [loginError, setLoginError] = useState({
    userName: "",
    password: ""
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({
      ...formInput,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // use ViewModel to validate
    const errors = vm.validateLoginInput(formInput);
    setLoginError(errors);

    if (Object.keys(errors).length !== 0) {
      setMessage("Invalid Username/Password");
      return;
    } else {
      // setMessage("Login is Successful!"); // optional
    }

    // backend login via ViewModel
    const result = await vm.getUser(formInput);

    if (!result.ok) {
      setMessage(result.message);
      return;
    }

    // success: save user + navigate
    localStorage.setItem('User', JSON.stringify(result.data));
    navigate("/Dashboard");
  };

  return (
    <div className="signin-bg">
      <form onSubmit={handleSubmit}>
        <div className="form-card">
          <h2 className="Title-2">Sign In</h2>

          <label>UserName:</label>
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
