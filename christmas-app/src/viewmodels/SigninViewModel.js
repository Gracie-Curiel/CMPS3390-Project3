// src/viewmodels/SigninViewModel.js
export default class SigninViewModel {

  constructor() {
    this.username = "";
    this.password = "";
  }

  isValidUsername(userName) {
    return userName.includes("@");
  }

  validateLoginInput(formInput) {
    let errors = {};

    if (!formInput.userName) {
      errors.userName = "Username is required!";
    }

    if (!formInput.password) {
      errors.password = "Password is required";
    }

    return errors;
  }

  async getUser() {
    const url =
      "https://artemis.cs.csub.edu/~nwilemon/proj3/getUser.php?username=" +
      encodeURIComponent(this.username) +
      "&password=" +
      encodeURIComponent(this.password);

    try {
      const response = await fetch(url);
      const data = await response.json();
      return data; // THIS goes back to Signin.jsx
    } catch (error) {
      console.error("Login error:", error);
      return null;
    }
  }
}
