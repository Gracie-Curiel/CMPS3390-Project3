export default class GiftlistViewModel {
  getGifts() {
    return JSON.parse(localStorage.getItem("giftList")) || [];
  }

  addRecipient(recipientData) {
    const gifts = JSON.parse(localStorage.getItem("giftList")) || [];

    gifts.push({
      name: recipientData.name,
      relationship: recipientData.relationship,
      gift: recipientData.gift,
      budget: recipientData.budget,
      status: "Pending"
    });

    localStorage.setItem("giftList", JSON.stringify(gifts));
  }

  updateStatus(index, newStatus) {
    const gifts = JSON.parse(localStorage.getItem("giftList")) || [];
    gifts[index].status = newStatus;
    localStorage.setItem("giftList", JSON.stringify(gifts));
  }

deleteGift(index) {
  let gifts = JSON.parse(localStorage.getItem("giftList")) || [];

  let user = JSON.parse(localStorage.getItem("User"));
  if (user) {
    let amount = Number(gifts[index].budget || 0);
    user.spentBudget = Number(user.spentBudget || 0) - amount;
    if (user.spentBudget < 0) user.spentBudget = 0;
    localStorage.setItem("User", JSON.stringify(user));
  }

  gifts.splice(index, 1);
  localStorage.setItem("giftList", JSON.stringify(gifts));

  window.dispatchEvent(new Event("budget-updated"));
  window.dispatchEvent(new Event("giftlist-updated"));
}



}
