import React from "react";
import styles from "./LoginButton.css";

import { Link } from 'react-router-dom';

import Title2 from "../Title2"

const LoginButton = ({
    onPressLogout,
    onPressConnect,
    loading,
    address,
  }) => {
    return (
      <div>
        {address && !loading ? (
          <button onClick={onPressLogout} className={styles["connect-wallet"]}>
            <Link to="/collection" params={{ address }}>
              <Title2 text="You're Connected !" />
              Click here to go to the collection
            </Link>
          </button>
        ) : loading ? (
          <button
            className={`${styles["connect-wallet"]} ${styles["connect-button-loading"]}`}
            disabled
          >
            <div>Loading...</div>
          </button>
        ) : (
          <button onClick={onPressConnect} className={styles["connect-wallet"]}>
            Connect Wallet
          </button>
        )}
      </div>
    );
};

export default LoginButton;