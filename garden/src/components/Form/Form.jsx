import React, { useState } from "react";
import s from "./Form.module.css";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

function Form({ submite, type, name, placeholder, regexp, styles, title, stylesBtn }) {
  const [error, setError] = useState(false);

  const valueInput = (event) => {
    const { value } = event.target;
    setError(!value.match(regexp));
  };

  const checkRegexp = () => {
    if (!error) {
      alert("Введите номер телефона в формате 9 цифр");
    }
  };

  return (
    <div>
      <form onSubmit={submite}>
        <Input
          type={type}
          name={name}
          placeholder={placeholder}
          regexp={regexp}
          styles={styles}
          onChange={valueInput}
          onBlur={checkRegexp}
        />
        <Button title={title} styles={stylesBtn} />
      </form>
    </div>
  );
}

export default Form;

