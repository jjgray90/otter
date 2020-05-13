import React from "react";
import styles from "./ConfirmationModalBox.module.scss";
import Button from "../Button";

const ConfirmationModalBox = (props) => {
  const { title, message, handleClick, btnText } = props;

  return (
    <div className={styles.modal}>
      <div>
        <h2>{title}</h2>
        <p>{message}</p>
        <section className={styles.btn}>
          <Button btnText={btnText} handleClick={handleClick} />
        </section>
      </div>
    </div>
  );
};

export default ConfirmationModalBox;
