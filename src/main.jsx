import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GIFExpertApp } from "./GIFExpertApp";

import './styles.css'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Titulo */}
    <GIFExpertApp />
    {/* input */}
    {/* Listado de gifs */}
    {/*gifItem */}
  </StrictMode>
);
