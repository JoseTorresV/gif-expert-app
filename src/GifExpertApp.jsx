import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GIFExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "dragon ball"]);

  const onAddCategory = (value) => {
    console.log({ value });
    // const { value } = event.target;
    // const newCategory = !value ? "Valorant" : value;
    setCategories([...categories, value]);
  };

  console.log(categories);

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>
      {/* input */}
      {/* <AddCategory setCategories={ setCategories }/> */}
      <AddCategory onNewCategory={onAddCategory} />
      {/* Listado de gifs */}
      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
        {/* <li>ABC</li> */}
      </ol>
      {/*gifItem */}
    </>
  );
};
