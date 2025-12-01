import "./Dashboard.css";
import { Link, useNavigate } from "react-router-dom";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import Navbar from "./Navbar.jsx";
let user = JSON.parse(localStorage.getItem('User'));

export default function Dashboard({ totalBudget, totalSpent }) {
  const navigate = useNavigate();
  if(!localStorage.getItem('User')){
    navigate("/Signin");
  }
  //passing parameters from giftlist
  const data = [
    { name: "Total-Budget", value: user.totalBudget },
    { name: "Total-Spent", value: user.spentBudget },
  ];
  const Colors = ["#4CAF50", "#FF6B6B"];

  return (
    <div className="dashboard-container p-8">
      {/* NAV BAR */}
      <Navbar />

      {/* PIE CHART */}
      <div className="flex justify-center mt-12">
        <PieChart width={500} height={500}>
          <Pie data={data} dataKey="value" nameKey="name" outerRadius={200}>
            {data.map((entry, index) => (
              <Cell key={index} fill={Colors[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
        {/*
              
      <div className="flex flex-col items-center mt-6">
        <input
          type="number"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="input input-bordered w-48 mb-3"
          placeholder="Enter gift price"
        />
        <div className="flex gap-3">
          <button onClick={handleClick1} className="btn btn-success">
            Add
          </button>
          <button onClick={handleClick2} className="btn btn-error">
            Subtract
          </button>
        </div>
        */}
      </div>
    </div>
  );
}



//Nate sample code for api call setting budget max
//username automatically passed from login
 user = JSON.parse(localStorage.getItem('User'));
let newBudget = 500;
async function updateBudget() {
  if(!isNaN(updateBudget)){
      let url = "https://artemis.cs.csub.edu/~nwilemon/proj3/setBudget.php?username=" + encodeURIComponent(user.username) 
      + "&budget=" + encodeURIComponent(newBudget);
      let options = { method: 'GET' };
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }else{
      console.log("Budget not a number");
    }
    }
    updateBudget();


    //sample code for creating recipient 
    //username automatically passed from login
     user = JSON.parse(localStorage.getItem('User'));
async function addRecipient() {
  let recName = 'John';
  let relation = 'brother';
  let notes = 'He wants a PS5.';
      let url = "https://artemis.cs.csub.edu/~nwilemon/proj3/addRecipient.php?username=" + encodeURIComponent(user.username) + 
      "&recipientName=" + encodeURIComponent(recName) + "&relationship=" + encodeURIComponent(relation) + 
      "&notes=" + encodeURIComponent(notes);
      let options = { method: 'GET' };
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
    addRecipient();

    //sample code for getting all recipients for a user (it should automatically work as user is stored)
    user = JSON.parse(localStorage.getItem('User'));
    async function getRecipient() {
      let url = "https://artemis.cs.csub.edu/~nwilemon/proj3/getRecipient.php?username=" + encodeURIComponent(user.username);
      let options = { method: 'GET' };
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
    getRecipient();

    //delete recipient 
     user = JSON.parse(localStorage.getItem('User'));
     let RID = 9999999;
    async function deleteRecipient() {
      let url = "https://artemis.cs.csub.edu/~nwilemon/proj3/deleteRecipient.php?RID=" + encodeURIComponent(RID);
      let options = { method: 'GET' };
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
    deleteRecipient();
