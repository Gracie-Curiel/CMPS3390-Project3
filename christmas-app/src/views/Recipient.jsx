import { useState } from "react";
import RecipientViewModel from "../viewmodels/RecipientViewModel";
import GiftlistViewModel from "../viewmodels/GiftlistViewModel";

export default function Recipient() {
  const vm = new RecipientViewModel();
  const giftVM = new GiftlistViewModel();

  const [formInput, setFormInput] = useState({
    name: "",
    relationship: "",
    budget: "",
    gift: "",
  });

  const [formError, setFormError] = useState({});
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = vm.validateInput(formInput);
    setFormError(errors);

    if (Object.keys(errors).length === 0) {
      // 1️⃣ Save recipient to gift list
      giftVM.addRecipient(formInput);

      // 2️⃣ Update TOTAL SPENT in User object
      let user = JSON.parse(localStorage.getItem("User"));
      if (user) {
        user.spentBudget = Number(user.spentBudget || 0) + Number(formInput.budget);
        localStorage.setItem("User", JSON.stringify(user));
      }

      // 3️⃣ Auto-close the modal
      document.getElementById("recipient_modal").close();

      // 4️⃣ Clear form
      setFormInput({
        name: "",
        relationship: "",
        budget: "",
        gift: "",
      });

      setMessage("Saved!");
    } else {
      setMessage("Error, please enter the required fields");
    }
  };

  return (
    <div className="Recipient">
      <form onSubmit={handleSubmit}>
        <h2 className="Title-4">Add Recipient</h2>

        <input
          type="text"
          id="name"
          name="name"
          value={formInput.name}
          placeholder="Name"
          onChange={handleChange}
        />
        <p>{formError.name}</p>

        <input
          type="text"
          id="relationship"
          name="relationship"
          value={formInput.relationship}
          placeholder="Relationship"
          onChange={handleChange}
        />
        <p>{formError.relationship}</p>

        <input
          type="number"
          id="budget"
          name="budget"
          value={formInput.budget}
          placeholder="Budget"
          onChange={handleChange}
        />
        <p>{formError.budget}</p>

        <input
          type="text"
          id="gift"
          name="gift"
          value={formInput.gift}
          placeholder="Gift"
          onChange={handleChange}
        />

        <button type="submit" className="btn">Save</button>

        <p>{message}</p>
      </form>
    </div>
  );
}
