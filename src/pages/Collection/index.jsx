import React from "react";
import { StyledCollection } from "./indexStyled";

import Header from "../../organisms/Header";
import Content from "../../organisms/Content";

const Collection = ( {address, setAddress} ) => {

    return <StyledCollection>
        <Header address={address} setAddress={setAddress} />
        <Content />
    </StyledCollection>;
};

export default Collection;