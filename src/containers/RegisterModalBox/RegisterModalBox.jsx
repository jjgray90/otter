import React, { useState } from "react";
import styles from "./RegisterModalBox.module.scss";
import Button from "../../components/Button";
import InputField from "../../components/InputField";

const RegisterModalBox = (props) => {
  const { displayConfModal, confModalShown } = props;

  const [formValues, setFormValues] = useState({});
  const [confirmEmail, setConfirmEmail] = useState("");
  const [userError, setUserError] = useState("");

  let confModalJSX = confModalShown ? { display: "unset" } : null;

  const validateEmail = () => {
    const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(formValues.email);
  };

  const submitAnswers = () => {
    const isFormValid =
      formValues.name &&
      formValues.email.length >= 3 &&
      validateEmail() &&
      formValues.email === confirmEmail &&
      formValues.email !== "bob@cuckoo.co";

    if (isFormValid) {
      console.log(JSON.stringify(formValues));

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      };

      fetch(
        "https://yo7dm2sa2i.execute-api.eu-west-2.amazonaws.com/prod/signup",
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          displayConfModal();
          setUserError("");
        })
        .catch((error) => console.log(error));
    } else setUserError(handleInvalidInput());
  };

  const handleInvalidInput = () => {
    if (!formValues.name && !formValues.email) {
      return "We need a name & email address!";
    } else if (!formValues.name) {
      return "Don't forget your name";
    } else if (!formValues.email) {
      return "Please enter your email";
    } else if (formValues.email.length < 3 || !validateEmail()) {
      return "Invalid email";
    } else if (formValues.email !== confirmEmail) {
      return "Email's don't match!";
    } else if (formValues.email === "bob@cuckoo.co") {
      return "Bob, Bob, Bob. You're not welcome round here no more";
    } else return "";
  };

  return (
    <>
      <div className={styles.registerModalContainer}>
        <div className={styles.registerModal}>
          <h2>Request an Invite</h2>
          <section className={styles.inputFieldContainer}>
            <div className={styles.inputField}>
              <InputField
                placeholder="full name"
                selectInput={(input) =>
                  setFormValues({ ...formValues, name: input })
                }
              />
            </div>
            <div className={styles.inputField}>
              <InputField
                placeholder="email"
                type="email"
                selectInput={(input) =>
                  setFormValues({ ...formValues, email: input })
                }
              />
            </div>
            <div className={styles.inputField}>
              <InputField
                placeholder="confirm email"
                type="email"
                selectInput={(input) => setConfirmEmail(input)}
              />
            </div>
          </section>
          <p className={styles.userError}>{userError}</p>
          <section className={styles.btn}>
            <Button btnText="Sign up" handleClick={submitAnswers} />
          </section>
        </div>
      </div>
    </>
  );
};

export default RegisterModalBox;
