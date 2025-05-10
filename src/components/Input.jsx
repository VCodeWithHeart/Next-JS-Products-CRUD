import React from "react";

const Input = ({ type, name, placeholder, onChange, value }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
       className="border-1 border-zinc-400 rounded px-2 py-1 mx-2"
    />
  );
};

export default Input;
