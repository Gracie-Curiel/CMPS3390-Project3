import { useState } from "react";
export default function Recipient() {
  const [formInput, setFormInput] = useState({
    name: "",
    relationship: "",
    budget: "",
    notes: "",
  });
  const [formError, setFormError] = useState(false);
  //usesate for the inputs
  //handlers = submit
  //validation - makes sure its not empty
  //onchange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };
  const validationInput = () => {
    let errors = {};
    if (!formInput.name) {
      errors.Name = "Name is required!";
    }
    if (!formInput.relationship) {
      errors.relationship = "Relationship is required!";
    }
    if (!formInput.budget) {
      errors.budget = "Budget is requried!";
    } // need to make sure they do not add letters
    setFormError(errors);
    return errors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const valid = validationInput();
    if (Object.keys(valid).length == 0) {
      setmessage("Saved!");
    } else {
      setmessage("Error, Please Enter the required field");
    }
  };
  //form neeeds a name  relationship budget notes and a save button
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
          onchange={handleChange}
        />
        <input
          type="text"
          id="relationship"
          name="relationship"
          placeholder="Relationship"
          value={formInput.relationship}
          onchange={handleChange}
        />
        <input
          type="number"
          id="budget"
          name="budget"
          value={formInput.budget}
          placeholder="Budget"
          onchange={handleChange}
        />
        <input
          type="text"
          id="notes"
          name="notes"
          value={formInput.notes}
          placeholder="Notes-optional"
          onchange={handleChange}
        />
        <button type="submit" className="btn">
          Save
        </button>
      </form>
    </div>
  );
}
