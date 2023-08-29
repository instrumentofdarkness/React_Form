import React, { useState } from "react";

export default function NameEntry() {
  const [userInput, setUserInput] = useState("");
  // logic goes here
  function onChangeHandler(event) {
    // step 1: get the value from the input / get user input
    // step 2: set the value to the state
    // step 3: display the value on the screen

    console.log(event.target.value);
    // logic goes here
    // initial state changes from "" to event.target.value
    const newInput = event.target.value;
    setUserInput(newInput);
  }
  return (
    <div>
      <br />
      <form>
        <label>
          Name: 
          <input type="text" placeholder="Enter your name"
          name="name" onChange={onChangeHandler} />
        </label>
      </form>
      <p>This is the user's name: {userInput}</p>
    </div>
  );
}
