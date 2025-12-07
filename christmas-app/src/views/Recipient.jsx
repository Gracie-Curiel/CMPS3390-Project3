import { useState } from "react";
import RecipientViewModel from "../viewmodels/RecipientViewModel";

export default function Recipient() {
  const vm = new RecipientViewModel();

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

    // validate in viewmodel
    const errors = vm.validateInput(formInput);
    setFormError(errors);

    if (Object.keys(errors).length > 0) {
      setMessage("Error, please enter the required fields");
      return;
    }

    // save recipient (viewmodel handles everything)
    vm.saveRecipient(formInput);

    // close modal
    document.getElementById("recipient_modal").close();

    // reset form
    setFormInput({
      name: "",
      relationship: "",
      budget: "",
      gift: "",
    });

    setMessage("Saved!");
  };

  return (
    <div className="Recipient">
      <form onSubmit={handleSubmit}>
        <h2>Add Recipient</h2>

        <input
          type="text"
          name="name"
          value={formInput.name}
          placeholder="Name"
          onChange={handleChange}
        />
        <p>{formError.name}</p>

        <input
          type="text"
          name="relationship"
          value={formInput.relationship}
          placeholder="Relationship"
          onChange={handleChange}
        />
        <p>{formError.relationship}</p>

        <input
          type="number"
          name="budget"
          value={formInput.budget}
          placeholder="Budget"
          onChange={handleChange}
        />
        <p>{formError.budget}</p>

        <input
          type="text"
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
