import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const StyledLinker = styled.div`
    width: 180px;
    display : flex;
    justify-content: space-between;
    color: #4E064B;
`;

export const StyledLink = styled(Link)`
    font-size: 1.2rem;
    text-decoration: none;
    font-weight: bold;
    cursor: ${props => props.clickable ? "pointer" : "default"};

    &:hover {
        color: #FCC63A;
    }
`;
