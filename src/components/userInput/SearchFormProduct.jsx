import React, { useState } from "react";

export default function SearchFormProduct({ setSearchTerm }) {
  function onChangeHandler(event) {
    setSearchTerm(event.target.value);
  }
  return (
    <div>
      <form>
        <label>
          Please enter the product name:
          <input
            type="text"
            placeholder="Search"
            name="userInput"
            onChange={onChangeHandler}
          />
          <button type="submit">Search</button>
        </label>
      </form>
    </div>
  );
}
