import React, { useState } from "react";
import styles from "./RegisterModalBox.module.scss";
import ConfirmationModalBox from "../../components/ConfirmationModalBox";
import Button from "../../components/Button";

const RegisterModalBox = (props) => {
  const { title, message, handleClick, btnText } = props;

  const [modalShown, toggleModal] = useState(false);

  let modalJSX = modalShown ? { display: "unset" } : null;

  const displayConfModal = () => {
    toggleModal(!modalShown);
  };

  return (
    <div className={styles.registerModal}>
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

export default RegisterModalBox;
