// src/viewmodels/RecipientViewModel.js
export default class RecipientViewModel {

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
}
