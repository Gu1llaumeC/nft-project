import React from "react";
import { StyledHeader } from "./indexStyled";

import MintButton from "../../molecules/MintButton";
import Title from "../../molecules/Linker";
import Account from "../../molecules/Account";

const Header = ( {address, setAddress} ) => {
    return <StyledHeader>
        <MintButton />
        <Title />
        <Account address={address} setAddress={setAddress} />
    </StyledHeader>;
};

export default Header;