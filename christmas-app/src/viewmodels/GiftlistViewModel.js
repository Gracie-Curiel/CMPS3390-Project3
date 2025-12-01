// src/viewmodels/GiftlistViewModel.js
export default class GiftlistViewModel {
  constructor() {
    // Load saved gifts (optional)
    this.gifts = JSON.parse(localStorage.getItem("giftList")) || [];
  }

  getGifts() {
    return this.gifts;
  }
}
