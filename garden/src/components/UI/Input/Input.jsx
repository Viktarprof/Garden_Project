import React, { useState } from "react";
import s from "./Input.module.css";

function Input({ type, styles, placeholder, name, regexp }) {

  const [error, setError] = useState(false);

  const valueInput = (event) => {
    const { value } = event.target;
    setError(!value.match(regexp));

  };

  const checkRegexp = () => {
    if (error) {
      alert("Введите 10 цифр");
    }
  };

  return (
    <input
      regexp={regexp}
      type={type}
      name={name}
      placeholder={placeholder}
      className={`${s[styles]}`}
      onChange={valueInput}
      onBlur={checkRegexp}
    />
  );
}

export default Input;

