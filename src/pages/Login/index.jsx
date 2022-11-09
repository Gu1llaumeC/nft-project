import React from "react";
import Web3 from "web3";
import { useState } from "react";
import "./Login.css";

import LoginButton from "../../atoms/LoginButton";

const Login = ( {address, setAddress} ) => {
    
    const [loading, setLoading] = useState(false);

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
    
    return(
        <div className="Login">
            <h1>Welcome on our NFT Project</h1>
            <h2>Please Login with Metamask</h2>
            <LoginButton
            onPressConnect={onPressConnect}
            onPressLogout={onPressLogout}
            loading={loading}
            address={address}
            />
      </div>
    );
};

export default Login;