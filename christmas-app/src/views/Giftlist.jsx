import React, { useState, useEffect } from "react";
import GiftlistViewModel from "../viewmodels/GiftlistViewModel";
import Recipient from "./Recipient";
import Navbar from "./Navbar";
import "./Giftlist.css";

export default function Giftlist() {
  const vm = new GiftlistViewModel();

  const [gifts, setGifts] = useState([]);

  // Load data once on mount
  useEffect(() => {
    setGifts(vm.getGifts());
  }, []);

  // Listen for storage updates (Recipient updates localStorage)
  useEffect(() => {
    const syncGifts = () => setGifts(vm.getGifts());
    window.addEventListener("storage", syncGifts);
    return () => window.removeEventListener("storage", syncGifts);
  }, []);

  // Custom event to refresh without refresh
  useEffect(() => {
    const handler = () => setGifts(vm.getGifts());
    window.addEventListener("giftlist-updated", handler);
    return () => window.removeEventListener("giftlist-updated", handler);
  }, []);

  return (
    <div className="giftlist-bg">
      <Navbar />
      <div className="giftlist-container">

        <div className="giftlist-card">
          <h2 className="giftlist-title">Gift List</h2>

          <button
            id="btn"
            onClick={() => document.getElementById("recipient_modal").showModal()}
          >
            Add Gift
          </button>

          <table className="gift-table">
          <thead>
            <tr>
              <th>Recipient</th>
              <th>Relationship</th>
              <th>Gift</th>
              <th>Budget</th>
              <th>Status</th>
              <th></th>
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
                    <td>{g.gift}</td>
                    <td>{g.budget}</td>
                    <td>
                      <select
                        value={g.status || "Pending"}
                        onChange={(e) => {
                          vm.updateStatus(index, e.target.value);
                          window.dispatchEvent(new Event("giftlist-updated"));
                        }}
                      >
                        <option value="Purchased">Purchased</option>
                        <option value="Not Purchased">Not Purchased</option>
                      </select>
                    </td>
                    <td>
                      <button
                        className="delete-btn"
                        onClick={() => {
                          vm.deleteGift(index);
                        }}
                      >
                        ✖
                      </button>
                   </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* POPUP MODAL */}
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
