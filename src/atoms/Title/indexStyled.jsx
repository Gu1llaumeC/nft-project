import styled from 'styled-components';

export const StyledTitle = styled.div`
    width: 180px;
    display : flex;
    justify-content: space-between;
`;

export const StyledContent = styled.h2`
    color: #4E064B;
    font-weight: ${props => props.primary ? "bold" : "normal"};
    cursor: ${props => props.clickable ? "pointer" : "default"};
`;