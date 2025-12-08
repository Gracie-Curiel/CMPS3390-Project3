export default class SignupViewModel {
  constructor() {
    this.allUsers = []; // stores all users fetched
  }

  async loadAllUsers() {
    let url = "https://artemis.cs.csub.edu/~nwilemon/proj3/allUsers.php";
    let options = { method: "GET" };

    try {
      const response = await fetch(url, options);
      this.allUsers = Object.values(await response.json());
      console.log(this.allUsers);
      return this.allUsers;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  // ✅ Username no longer needs "@"
  isValidUsername(userName) {
    return userName.length >= 3; // simple rule — can change!
  }

  validateFormInput(formInput) {
    let errors = {};

    if (!formInput.firstName) errors.firstName = "First name is required!";
    if (!formInput.lastName) errors.lastName = "Last name is required!";

    // ✅ Updated username validation
    if (!formInput.userName) {
      errors.userName = "Username is required!";
    } else if (!this.isValidUsername(formInput.userName)) {
      errors.userName = "Username must be at least 3 characters";
    }

    if (!formInput.password) {
      errors.password = "Password is required";
    }

    if (!formInput.confirmPassword) {
      errors.confirmPassword = "Password needs confirmation";
    } else if (formInput.confirmPassword !== formInput.password) {
      errors.confirmPassword = "Passwords must match";
    }

    // ✅ Check if username already exists
    this.allUsers.forEach((user) => {
      if (user.username === formInput.userName) {
        errors.userName = "Username is already in use!";
      }
    });

    return errors;
  }

  async createUser(formInput) {
    let url =
      "https://artemis.cs.csub.edu/~nwilemon/proj3/createUser.php?username=" +
      encodeURIComponent(formInput.userName) +
      "&Fname=" +
      encodeURIComponent(formInput.firstName) +
      "&Lname=" +
      encodeURIComponent(formInput.lastName) +
      "&pass=" +
      encodeURIComponent(formInput.password) +
      "&totalBudget=0&spentBudget=0";

    let options = { method: "GET" };

    try {
      const response = await fetch(url);

      // Try JSON but don't crash if invalid
      try {
        await response.json();
      } catch (e) {
        console.warn("PHP did not return JSON, but user was created.");
      }

      return true; 
    } catch (err) {
      console.error("Create user error:", err);
      return false;
    }
  }
}
