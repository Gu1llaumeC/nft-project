import React from "react";
import { StyledLinker, StyledLink } from "./indexStyled";

import Title1 from "../../atoms/Title1";

const Linker = () => {

    // return true if the current page is the page passed in parameter
    const isCurrentPage = (page) => {
        return window.location.pathname === page;
    }

    return <StyledLinker>
        
        <StyledLink clickable="true" to="../Market"> 
            <Title1 weight={isCurrentPage("/Market") ? "bold": "normal"} text="Buy" />
        </StyledLink>
        
        <Title1 text="|" />
        
        <StyledLink clickable="true" to="../Collection">
            <Title1 weight={isCurrentPage("/Collection") ? "bold": "normal"} text="My Collection" />
        </StyledLink>
    </StyledLinker>;
}

export default Linker;