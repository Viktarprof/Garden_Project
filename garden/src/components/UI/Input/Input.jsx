import React, { useState } from "react";
import s from "./Input.module.css";

function Input({ type, styles, placeholder, name, regexp, value, onBlur, onChange, onClick }) {

  return (
    <input
      regexp={regexp}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      className={`${s[styles]}`}
      onChange={onChange}
      onBlur={onBlur}
      onClick={onClick}
    />
  );
}

export default Input;

