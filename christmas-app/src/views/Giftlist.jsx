import React from "react";
import GiftlistViewModel from "../viewmodels/GiftlistViewModel";
import Recipient from "./Recipient";
import Navbar from "./Navbar";
import "./Giftlist.css";

export default function Giftlist() {
  const vm = new GiftlistViewModel();
  const gifts = vm.getGifts();

  return (
    <div className="giftlist-bg">
      <Navbar />
        <div className="giftlist-container">

      <div className="giftlist-card">
        <h2 className="giftlist-title">Gift List</h2>

        {/* OPEN MODAL BUTTON */}
        <button
          id="btn"
          onClick={() => document.getElementById("recipient_modal").showModal()}
        >
          Add Gift
        </button>

        {/* TABLE */}
        <table className="gift-table">
          <thead>
            <tr>
              <th>Recipient</th>
              <th>Relationship</th>
              <th>Price</th>
              <th>Notes</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {gifts.length === 0 ? (
              <tr>
                <td colSpan="5" className="empty-row">
                  No recipients added yet.
                </td>
              </tr>
            ) : (
              gifts.map((g, index) => (
                <tr key={index}>
                  <td>{g.name}</td>
                  <td>{g.relationship}</td>
                  <td>{g.budget}</td>
                  <td>{g.notes}</td>
                  <td>{g.status || "Pending"}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        </div>
      </div>

      {/* POPUP MODAL (DAISYUI STYLE) */}
    <dialog id="recipient_modal" className="modal">
      <div className="modal-box custom-modal-box">
        <Recipient />

        <div className="modal-action">
          <form method="dialog">
            <button className="btn modal-close-btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>

    </div>
  );
}
