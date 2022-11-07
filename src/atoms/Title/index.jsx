import React from "react";
import { StyledTitle, StyledContent } from "./indexStyled";

const Title = () => {

    return <StyledTitle>
        <StyledContent clickable to="../Market">Buy</StyledContent>
        <StyledContent> / </StyledContent>
        <StyledContent primary clickable to="./">My Collection</StyledContent>
    </StyledTitle>;
}

export default Title;