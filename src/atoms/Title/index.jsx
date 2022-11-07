import React from "react";
import { StyledTitle, StyledContent } from "./indexStyled";

const Title = () => {
    return <StyledTitle>
        <StyledContent clickable>Buy</StyledContent>
        <StyledContent> / </StyledContent>
        <StyledContent primary clickable>My Collection</StyledContent>
    </StyledTitle>;
}

export default Title;