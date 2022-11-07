import React from "react";
import { StyledBuyButton } from "./indexStyled";

const BuyButton = (props) => {
    return <StyledBuyButton>
        <h2>{props.text ? props.text : "Buy"}</h2>
    </StyledBuyButton>;
};

export default BuyButton;