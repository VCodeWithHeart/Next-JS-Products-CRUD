import React from "react";

const Button = ({ text, clickFn, styles }) => {
  return (
    <button
      onClick={clickFn}
      className={`py-2 font-semibold rounded bg-gradient-to-r from-white to-black text-black
         hover:from-gray-200 hover:to-zinc-800 transition duration-700 uppercase tracking-wider ${styles}`}
    >
      {text}
    </button>
  );
};

export default Button;
