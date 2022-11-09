import React from "react";
import { StyledLinker, StyledLink } from "./indexStyled";

import Title1 from "../../atoms/Title1";

const Linker = () => {

    const isCurrentPage = (page) => {
        console.log(window.location.pathname);
        return window.location.pathname === page;
    }

    return <StyledLinker>
        
        <StyledLink clickable="true" to="../market"> 
            <Title1 weight={isCurrentPage("/market") ? "bold": "normal"} text="Buy" />
        </StyledLink>
        
        <Title1 text="|" />
        
        <StyledLink clickable="true" to="../collection">
            <Title1 weight={isCurrentPage("/collection") ? "bold": "normal"} text="My Collection" />
        </StyledLink>
    </StyledLinker>;
}

export default Linker;
