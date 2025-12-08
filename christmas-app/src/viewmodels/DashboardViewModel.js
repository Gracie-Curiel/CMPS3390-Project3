export default class DashboardViewModel {

  constructor() {
    this.user = JSON.parse(localStorage.getItem("User"));
    this.newBudget = 500;
    this.RID = 9999999;
  }

  requiresAuth() {
    return !localStorage.getItem("User");
  }

  getChartData() {
    const updatedUser = JSON.parse(localStorage.getItem("User"));
    this.user = updatedUser;

    return [
      { name: "Total-Budget", value: updatedUser?.totalBudget || 0 },
      { name: "Total-Spent", value: updatedUser?.spentBudget || 0 },
    ];
  }


  // ------------------------------------------
  // Your exact functions moved inside the class
  // ------------------------------------------

async updateBudget() {
  if (isNaN(this.newBudget)) {
    console.log("Budget not a number");
    return false;
  }

  let url =
    "https://artemis.cs.csub.edu/~nwilemon/proj3/setBudget.php?username=" +
    encodeURIComponent(this.user.username) +
    "&budget=" +
    encodeURIComponent(this.newBudget);

  let options = { method: "GET" };

  try {
    const response = await fetch(url, options);

    // 🔹 PHP returns plain text like "It worked.", NOT JSON
    const text = await response.text();
    console.log("Budget API response:", text);

    // 🔹 Safely update localStorage User
    const storedUser = JSON.parse(localStorage.getItem("User")) || {};
    const updatedUser = {
      ...storedUser,
      totalBudget: Number(this.newBudget),
    };

    this.user = updatedUser;
    localStorage.setItem("User", JSON.stringify(updatedUser));

    // 🔹 Tell Dashboard to refresh chart
    window.dispatchEvent(new Event("budget-updated"));

    return true;
  } catch (error) {
    console.error("Budget update error:", error);
    return false;
  }
}



  async addRecipient() {
    let recName = "John";
    let relation = "brother";
    let notes = "He wants a PS5.";

    let url =
      "https://artemis.cs.csub.edu/~nwilemon/proj3/addRecipient.php?username=" +
      encodeURIComponent(this.user.username) +
      "&recipientName=" +
      encodeURIComponent(recName) +
      "&relationship=" +
      encodeURIComponent(relation) +
      "&notes=" +
      encodeURIComponent(notes);

    let options = { method: "GET" };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  async getRecipient() {
    let url =
      "https://artemis.cs.csub.edu/~nwilemon/proj3/getRecipient.php?username=" +
      encodeURIComponent(this.user.username);

    let options = { method: "GET" };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  async deleteRecipient() {
    let url =
      "https://artemis.cs.csub.edu/~nwilemon/proj3/deleteRecipient.php?RID=" +
      encodeURIComponent(this.RID);

    let options = { method: "GET" };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
}
