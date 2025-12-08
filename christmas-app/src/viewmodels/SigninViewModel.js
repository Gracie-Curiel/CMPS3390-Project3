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
    } else if (!this.isValidUsername(formInput.userName)) {
    errors.userName = "Username must be atleast 4 characters !";
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
      console.log(data);

      // if username is wrong, API returns null
      if (data == null){
        return { ok: false, message: "Incorrect Username or Password" };
      }

      if (
        formInput.userName !== data.username ||
        formInput.password !== data.pass
      ) {
        return { ok: false, message: "Incorrect Username or Password" };
      }

      // success</header>
      return { ok: true, data };
    } catch (error) {
      console.error("Login error:", error);
      return null;
    }
  }
}
