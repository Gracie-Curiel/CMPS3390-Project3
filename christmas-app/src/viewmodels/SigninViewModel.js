// src/viewmodels/SigninViewModel.js
export default class SigninViewModel {

  constructor() {
    this.username = "";
    this.password = "";
  }

  isValidUsername(userName) {
    return userName.length >= 4;
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

      // backend returns null when no match
      if (data == null) {
        return { error: true, message: "Invalid username or password" };
      }

      // return the raw user object
      return data;

    } catch (error) {
      console.error("Login error:", error);
      return { error: true, message: "Server error" };
    }
  }
}
