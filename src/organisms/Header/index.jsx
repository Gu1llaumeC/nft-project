import React from "react";
import { StyledHeader } from "./indexStyled";

import Button from "../../atoms/Button";
import Title from "../../atoms/Title";

const Header = () => {
    return <StyledHeader>
        <Button />
        <Title />
    </StyledHeader>;
};

export default Header;