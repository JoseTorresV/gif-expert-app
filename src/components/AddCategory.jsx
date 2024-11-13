import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {
  // const [inputValue, setInputValue] = useState("Dragon Ball Z");
  const [inputValue, setInputValue] = useState("Dragon Ball Z");

  const onInputChange = ({ target }) => {
    const { value } = target;
    // console.log(value);
    setInputValue(value);
  };

  const onSubmitChange = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;

    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    // Qui uso il arial-label per poter leggere il contenuto del form nel test
    <form onSubmit={onSubmitChange} aria-label="form">
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
