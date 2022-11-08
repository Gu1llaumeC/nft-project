import React from "react";
import { StyledLoginContent } from "./indexStyled";

import LoginButton from "../../atoms/LoginButton";

function handleClick(e) {
    e.checkWalletIsConnected();
    console.log('Login');
  }

function checkWalletIsConnected() {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have Metamask installed!");
      return;
    } else {
      console.log("Wallet exists! We're ready to go!")
    }

    const accounts = ethereum.request({ method: 'eth_accounts' });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account: ", account);
      setCurrentAccount(account);
    } else {
      console.log("No authorized account found");
    }
  }

const LoginContent = () => {
    return <StyledLoginContent>
        <LoginButton onclick={handleClick} />
    </StyledLoginContent>;
};

export default LoginContent;