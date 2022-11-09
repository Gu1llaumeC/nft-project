import React from "react";
import styles from "./LoginButton.css";

const LoginButton = ({ onPressLogout, onPressConnect, loading, address }) => {
  return (
    <div>
      {address && !loading ? (
        <button onClick={onPressLogout} className={styles["connect-wallet"]}>
          Redirecting ...
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
