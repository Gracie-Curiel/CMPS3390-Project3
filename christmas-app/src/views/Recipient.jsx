import { useState } from "react";
import RecipientViewModel from "../viewmodels/RecipientViewModel";

export default function Recipient() {
  const vm = new RecipientViewModel();

  const [formInput, setFormInput] = useState({
    name: "",
    relationship: "",
    budget: "",
    notes: "",
  });

  const [formError, setFormError] = useState({});
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ask ViewModel to validate
    const errors = vm.validateInput(formInput);
    setFormError(errors);

    if (Object.keys(errors).length === 0) {
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
          id="notes"
          name="notes"
          value={formInput.notes}
          placeholder="Notes (optional)"
          onChange={handleChange}
        />

        <button type="submit" className="btn">Save</button>

        <p>{message}</p>
      </form>
    </div>
  );
}
