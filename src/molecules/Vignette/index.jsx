import React from "react";
import { StyledVignette, StyledFilter } from "./indexStyled";

import TransactionButton from "../TransactionButton";

const Vignette = () => {

    const getCurrentPage = () => {
        if(window.location.pathname === "/market"){
            return "Buy";
        } else if(window.location.pathname === "/collection"){
            return "Sell";
        }
    }

    return <StyledVignette>
        <StyledFilter />
        <TransactionButton text={getCurrentPage()} />
    </StyledVignette>;
};

// TODO: Add name of NFT
/* <h3>Legendary John on yellow background</h3> */
// Nom de la collection et id

// TODO: check connection each page

export default Vignette;
