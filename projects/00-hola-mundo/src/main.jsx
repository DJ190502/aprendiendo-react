import React from "react";
import ReactDom from "react-dom/client";

const root = ReactDom.createRoot(document.getElementById("root"));

const createButton = ({ text }) => {
  return (
    <button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
      {text}
    </button>
  );
};

root.render(
  <React.Fragment>
    {createButton({ text: "Boton 1" })}
    {createButton({ text: "Boton 2" })}
    {createButton({ text: "Boton 3" })}
  </React.Fragment>
);
