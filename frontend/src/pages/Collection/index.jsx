import React, { useEffect, useState } from "react";
import { StyledCollection } from "./indexStyled";
import Web3 from "web3";
import { ethers } from "ethers";
import Header from "../../organisms/Header";
import Content from "../../organisms/Content";

const Collection = () => {
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

  const onMint = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const contract = require("../../contracts/NFT_CGL.sol/NFT_CGL.json");
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const nftContract = new ethers.Contract(
          nftContractAddress,
          contract.abi,
          signer
        );

        let nftTxn = await nftContract.safeMint();

        await nftTxn.wait();

        console.log(
          `Mined, see transaction: https://goerli.etherscan.io/tx/${nftTxn.hash}`
        );
      } else {
        console.log("Ethereum object does not exist");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledCollection>
      <Header address={address} onClick={onClick} onMint={onMint} />
      <Content />
    </StyledCollection>
  );
};

export default Collection;
