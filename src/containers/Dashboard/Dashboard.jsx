import React, { useState } from "react";
import styles from "./Dashboard.module.scss";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import RegisterModalBox from "../RegisterModalBox";
import ConfirmationModalBox from "../../components/ConfirmationModalBox";

const Dashboard = () => {
  const [regModalShown, toggleRegModal] = useState(false);
  const [confModalShown, toggleConfModal] = useState(false);

  let regModalJSX = regModalShown ? { display: "unset" } : null;
  let confModalJSX = confModalShown ? { display: "unset" } : null;

  const displayRegModal = () => {
    toggleRegModal(!regModalShown);
  };

  const displayConfModal = () => {
    if (regModalShown) {
      displayRegModal();
      toggleConfModal(!confModalShown);

    } else {
      toggleConfModal(!confModalShown);
    }
  };

  return (
    <section className={styles.dashboardContainer}>
      <div className={styles.navBarContainer}>
        <NavBar />
      </div>
      <section className={styles.mainBody}>
        <h2>The new way to happiness is Otter!</h2>
        <p>Be the first to know when we launch</p>
        <div className={styles.btn}>
          <Button
            btnText="Request an invite"
            handleClick={() => displayRegModal()}
          />
        </div>
      </section>
      <div className={styles.footerContainer}>
        <Footer />
      </div>

      <div className={styles.registerModal} style={regModalJSX}>
        <RegisterModalBox
          displayRegModal={displayRegModal}
          toggleRegModal={toggleRegModal}
          regModalShown={regModalShown}
          toggleConfModal={toggleConfModal}
          confModalShown={confModalShown}
          displayConfModal={displayConfModal}
        />
      </div>

      <div className={styles.confirmationModal} style={confModalJSX}>
        <ConfirmationModalBox
          title="All Done!"
          message="You'll be notified when we launch"
          handleClick={() => displayConfModal()}
          btnText="OK"
        />
      </div>
    </section>
  );
};

export default Dashboard;
