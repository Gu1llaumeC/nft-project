import React from "react";
import { StyledHeader } from "./indexStyled";

import MintButton from "../../molecules/MintButton";
import Title from "../../molecules/Linker";

const Header = () => {
    return <StyledHeader>
        <MintButton />
        <Title />
    </StyledHeader>;
};

export default Header;