import React, { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  //   const { setCategories } = onAddCategories;

  const [inputValue, setInputValue] = useState("Dragon ball");

  const onInputChange = ({ target }) => {
    const { value } = target;
    console.log(value);
    setInputValue(value);
  };

  const onSubmitChange = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;

    // console.log(inputValue);
    // setCategories((categories) => [inputValue, ...categories]);
    onNewCategory(inputValue.trim())
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmitChange}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
