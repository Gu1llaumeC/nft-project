import React, { useEffect, useState } from "react";
import { StyledCollection } from "./indexStyled";
import Web3 from "web3";
import Header from "../../organisms/Header";
import Content from "../../organisms/Content";

const Collection = () => {
  const [address, setAddress] = useState(null);

  async function fetchAddress() {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    return accounts;
  }

  useEffect(() => {
    if (window?.ethereum?.isMetaMask) {
      // Desktop browser
      const accounts = fetchAddress();
      const account = Web3.utils.toChecksumAddress(accounts[0]);
      setAddress(account);
    }
  });
  return (
    <StyledCollection>
      <Header />
      <Content />
    </StyledCollection>
  );
};

export default Collection;
