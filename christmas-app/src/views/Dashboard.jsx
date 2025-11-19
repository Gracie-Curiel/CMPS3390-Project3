import "./Dashboard.css";
import { Link, Navigate } from "react-router-dom";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

let user = JSON.parse(localStorage.getItem('User'));

export default function Dashboard({ totalBudget, totalSpent }) {
  if(!localStorage.getItem('user')){
    navigate("/Signin");
  }
  //passing parameters from giftlist
  const data = [
    { name: "Total-Budget", value: totalBudget },
    { name: "Total-Spent", value: totalSpent },
  ];
  const Colors = ["#4CAF50", "#FF6B6B"];

  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/*NAV BAR*/}
      <div className="flex-1">
        <a className="text-2xl font-bold text-red-500">Christmas Gift Tacker</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Gift List</a>
          </li>
          <li>
            <Link to="/Signin">Log Out</Link>
          </li>
        </ul>
      </div>
      <PieChart width={500} height={500}>
        <Pie data={data} dataKey="value" nameKey="name" outerRadius={200}>
          {data.map((entry, index) => (
            <Cell key={index} fill={Colors[index]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
    //entry -holds the slices information -value and name, then it loops through both entry index 0 for entry 1 and index 1 for entry 2
    //Tooltip uses nameKey"name" and data"value"  so it will display the names and the values  of the slices when the mouse hovers.
    // We will need a pie chart that has two values "totalBudget" and "totalSpent"
    // The default budget will be zero
    // The default total will also be zero(will increase when the user adds a gift)
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
