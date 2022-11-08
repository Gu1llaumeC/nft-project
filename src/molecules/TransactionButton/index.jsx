import React from "react";
import { StyledTransactionButton } from "./indexStyled";

import Title1 from "../../atoms/Title1";

const TransactionButton = (props) => {
    return <StyledTransactionButton>
        <Title1 text={props.text} />
    </StyledTransactionButton>;
};

export default TransactionButton;