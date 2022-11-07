import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const StyledTitle = styled.div`
    width: 180px;
    display : flex;
    justify-content: space-between;
`;

export const StyledContent = styled(Link)`
    color: #4E064B;
    font-size: 1.2rem;
    text-decoration: none;
    font-weight: ${props => props.primary ? "bold" : "normal"};
    cursor: ${props => props.clickable ? "pointer" : "default"};
`;