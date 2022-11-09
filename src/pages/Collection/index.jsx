import React from "react";
import { useEffect } from "react";
import { StyledCollection } from "./indexStyled";

import Header from "../../organisms/Header";
import Content from "../../organisms/Content";

const Collection = ( address ) => {

    useEffect(() => {
        console.log("address", address);
    }, [address]);

    return <StyledCollection>
        {/* <Header address={address} /> */}
        <Content />
    </StyledCollection>;
};

export default Collection;
