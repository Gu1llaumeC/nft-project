import React from "react";
import { StyledHeader } from "./indexStyled";

import MintButton from "../../molecules/MintButton";
import Title from "../../molecules/Linker";
import Account from "../../molecules/Account";

const Header = ({ address, onClick, onMint }) => {
  return (
    <StyledHeader>
      <MintButton onMint={onMint} />
      <Title />
      <Account address={address} onClick={onClick} />
    </StyledHeader>
  );
};

export default Header;
