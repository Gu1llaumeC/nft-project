import React from "react";
import { StyledMarket } from "./indexStyled";

import Header from "../../organisms/Header";
import Content from "../../organisms/Content";

const Market = () => {
    return <StyledMarket>
        <Header />
        <Content />
    </StyledMarket>;
};

export default Market;