import React from "react";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      title: "Car Assurance",
      date: new Date(2023, 4, 22),
      amount: 456.66,
    },
    {
      title: "Bus Assurance",
      date: new Date(2022, 3, 20),
      amount: 46.66,
    },
    {
      title: "Bike Assurance",
      date: new Date(2021, 6, 15),
      amount: 856.66,
    },
  ];

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Lets get started!"),
  //   React.createElement(Expenses, { expenses: expenses })
  // );
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
