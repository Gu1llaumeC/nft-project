import React from "react";
import { StyledVignette, StyledFilter } from "./indexStyled";

import BuyButton from "../../atoms/BuyButton";

const Vignette = () => {
    return <StyledVignette>
        <StyledFilter />
        <BuyButton text="Sell" />
        {/* <h3>Legendary John on yellow background</h3> */}
    </StyledVignette>;
};

export default Vignette;