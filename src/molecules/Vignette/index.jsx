import React from "react";
import { StyledVignette, StyledFilter } from "./indexStyled";

import BuyButton from "../TransactionButton";

const Vignette = () => {
    return <StyledVignette>
        <StyledFilter />
        <BuyButton text="Sell" />
    </StyledVignette>;
};

// TODO: Add name of NFT
/* <h3>Legendary John on yellow background</h3> */

export default Vignette;