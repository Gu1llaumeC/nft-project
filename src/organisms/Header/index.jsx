import React from "react";
import { StyledHeader } from "./indexStyled";

import MintButton from "../../molecules/MintButton";
import Title from "../../molecules/Linker";
import Account from "../../molecules/Account";

const Header = () => {
    return <StyledHeader>
        <MintButton />
        <Title />
        <Account />
    </StyledHeader>;
};

export default Header;