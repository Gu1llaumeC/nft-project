import React from "react";
import { StyledLoginButton } from "./indexStyled";

const LoginButton = ({
  onPressLogout,
  onPressConnect,
  loading,
  address,
}) => {
  return (
    <StyledLoginButton>
      {address && !loading ? (
        <button onClick={onPressLogout} className={styles["connect-wallet"]}>
          Disconnect
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
    </StyledLoginButton>
  );
};

export default LoginButton;