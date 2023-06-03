import React, { useState } from "react";
import s from "./Form.module.css";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

function Form({
  submit,
  type,
  name,
  placeholder,
  regexp,
  styles,
  title,
  stylesBtn,
}) {
  const [error, setError] = useState(false);


  const valueInput = (event) => {
    const { value } = event.target;
    setError(!value.match(regexp));
  };

  const checkRegexp = (event) => {
    event.preventDefault();
    if (!event.target.phone.value) {
      alert("Please enter your phone number!");
      return;
    }
    if (error) {
      alert("Please enter a valid phone number (+ and 10 numbers)");
    } else {
      submit(event);
    }
  };

  return (
    <div>
      <form onSubmit={checkRegexp}>
        <Input
          type={type}
          name={name}
          placeholder={placeholder}
          styles={styles}
          onChange={valueInput}
        />
        <Button title={title} styles={stylesBtn} type="submit" />
      </form>
    </div>
  );
}

export default Form;