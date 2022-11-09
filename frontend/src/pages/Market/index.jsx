import React, { useEffect, useState } from "react";
import { StyledMarket } from "./indexStyled";
import Web3 from "web3";
import Header from "../../organisms/Header";
import Content from "../../organisms/Content";

const Market = () => {
  const [address, setAddress] = useState(null);
  const [nftContractAddress, setNftContractAddress] = useState(
    "0x7cE2FCD563454d7f95d3F5fA25321D1aF909a77e"
  );

  const onPressConnect = async () => {
    try {
      if (window?.ethereum?.isMetaMask) {
        // Desktop browser
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        const account = Web3.utils.toChecksumAddress(accounts[0]);
        setAddress(account);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onClick = () => {
    onPressConnect();
  };

  return (
    <StyledMarket>
      <Header address={address} onClick={onClick} />
      <Content />
    </StyledMarket>
  );
};

export default Market;
