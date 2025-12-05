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
    return [
      { name: "Total-Budget", value: this.user.totalBudget },
      { name: "Total-Spent", value: this.user.spentBudget },
    ];
  }

  // ------------------------------------------
  // Your exact functions moved inside the class
  // ------------------------------------------

async updateBudget() {
  if (!isNaN(this.newBudget)) {
    let url =
      "https://artemis.cs.csub.edu/~nwilemon/proj3/setBudget.php?username=" +
      encodeURIComponent(this.user.username) +
      "&budget=" +
      encodeURIComponent(this.newBudget);

    let options = { method: "GET" };
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);

      this.updateLocalUserBudget(this.newBudget);

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  } else {
    console.log("Budget not a number");
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
