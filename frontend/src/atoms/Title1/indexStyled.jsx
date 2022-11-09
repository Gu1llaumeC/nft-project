import styled from "styled-components";

export const StyledTitle1 = styled.h1`
    font-size: 1.2rem;
    font-weight: ${props => props.weight ? props.weight : "normal"};
    margin: 0;
    align-self: center;
`;
