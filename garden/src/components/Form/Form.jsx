import React from "react";
import s from "./Form.module.css";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

function Form({ submite, type, name, placeholder, regexp, styles, title, stylesBtn }) {
  return (
    <div>
      <form onSubmit={submite}>
        <Input
          type={type}
          name={name}
          placeholder={placeholder}
          regexp={regexp}
          styles={styles}
        />
        <Button title={title} styles={stylesBtn} />
      </form>
    </div>
  );
}

export default Form;
