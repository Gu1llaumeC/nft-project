import React from "react";
import { StyledMintButton } from "./indexStyled";

import Title1 from "../../atoms/Title1";

const MintButton = () => {
    return <StyledMintButton>
        <Title1 weight="bold" text="Mint" />
    </StyledMintButton>;
};

export default MintButton;
