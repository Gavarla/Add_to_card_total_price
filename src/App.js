import React from "react";
import "./style.css";

export default function App() {
  let initialValue = 0

let obj = [{n: 5}, {n: 9}, {n: 13}, {n: 25}, {n: 40}]

let sum = obj.reduce(function (accumulator, curValue) {

    return accumulator + curValue.n

}, initialValue)

return (
  <div>
      {console.log(sum)}
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
