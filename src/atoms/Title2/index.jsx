import React from "react";
import { StyledTitle2 } from "./indexStyled";

const Title2 = (props) => {
    return <StyledTitle2>
        {props.text ? props.text : "Title1"}
    </StyledTitle2>;
}

export default Title2;