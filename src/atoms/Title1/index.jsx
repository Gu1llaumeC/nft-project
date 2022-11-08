import React from 'react';
import { StyledTitle1 } from './indexStyled';

const Title1 = (props) => {
    return <StyledTitle1 weight={props.weight}>
        {props.text ? props.text : "Title1"}
    </StyledTitle1>;
}

export default Title1;