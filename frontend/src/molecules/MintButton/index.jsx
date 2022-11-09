import React from "react";
import { StyledMintButton } from "./indexStyled";

import Title1 from "../../atoms/Title1";

const MintButton = ({ onMint }) => {
  return (
    <StyledMintButton onClick={() => onMint()}>
      <Title1 weight="bold" text="Mint" />
    </StyledMintButton>
  );
};

export default MintButton;
