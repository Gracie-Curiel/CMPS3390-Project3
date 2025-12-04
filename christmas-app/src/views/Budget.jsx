import { useState } from "react";
import DashboardViewModel from "../viewmodels/DashboardViewModel";
import "./Budget.css";

export default function Budget() {
  const vm = new DashboardViewModel();
  const [budgetInput, setBudgetInput] = useState(vm.user?.totalBudget || "");

  const handleSave = async () => {
    vm.newBudget = budgetInput;   
    const success = await vm.updateBudget();

    if (success) {
      window.location.reload(); 
    }
  };

  return (
    <div className="budget-container">
      <h2 className="text-2xl font-bold mb-4">Set a budget to get started</h2>

      <label htmlFor="my_modal_6" className="budget-btn">
        Set Budget
      </label>

      <input type="checkbox" id="my_modal_6" className="modal-toggle" />

      <div className="modal" role="dialog">
        <div className="budget-modal-box">
          <h3 className="budget-title">Enter Budget</h3>

          <input
            type="number"
            value={budgetInput}
            onChange={(e) => setBudgetInput(e.target.value)}
            className="budget-input"
          />

          <div className="modal-action flex gap-4">
            <label htmlFor="my_modal_6" className="budget-btn" onClick={handleSave}>
              Save
            </label>

            <label htmlFor="my_modal_6" className="budget-btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
