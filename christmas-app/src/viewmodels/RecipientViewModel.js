// src/viewmodels/RecipientViewModel.js
import GiftlistViewModel from "./GiftlistViewModel";

export default class RecipientViewModel {

  constructor() {
    this.giftVM = new GiftlistViewModel();
  }

  validateInput(formInput) {
    let errors = {};

    if (!formInput.name) {
      errors.name = "Name is required!";
    }
    if (!formInput.relationship) {
      errors.relationship = "Relationship is required!";
    }
    if (!formInput.budget) {
      errors.budget = "Budget is required!";
    }

    return errors;
  }

  saveRecipient(formInput) {
    // 1️⃣ Add to gift list
    this.giftVM.addRecipient(formInput);

    // 2️⃣ Update user total spent
    let user = JSON.parse(localStorage.getItem("User"));
    if (user) {
      user.spentBudget =
        Number(user.spentBudget || 0) + Number(formInput.budget);
      localStorage.setItem("User", JSON.stringify(user));
    }

    // 3️⃣ Notify Giftlist UI to refresh
    window.dispatchEvent(new Event("giftlist-updated"));

    return true;
  }
}
