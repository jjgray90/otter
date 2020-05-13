import React from "react";
import styles from "./InputField.module.scss";

const InputField = (props) => {
  const { name, type, selectInput, placeholder, handleInput, value } = props;

  return (
    <input
      value={value}
      className={styles.inputField}
      type={type}
      name={name}
      onInput={(event) => selectInput(event.target.value)}
      placeholder={placeholder}
      onChange={handleInput}
    />
  );
};

export default InputField;
