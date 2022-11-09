import React from "react";
import Web3 from "web3";
import { useState } from "react";
import { StyledLogin } from "./indexStyled";

import LoginButton from "../../atoms/LonginButton";

const Login = () => {
    
    const [loading, setLoading] = useState(false);
    const [address, setAddress] = useState("");

    const onPressConnect = async () => {
        setLoading(true);

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

        setLoading(false);
    };

    const onPressLogout = () => setAddress("");
    
    return <StyledLogin>
        <h1>Welcome on our NFT Project</h1>
        <h2>Please Login with Metamask</h2>
        <LoginButton
          onPressConnect={onPressConnect}
          onPressLogout={onPressLogout}
          loading={loading}
          address={address}
        />
    </StyledLogin>;
};

export default Login;