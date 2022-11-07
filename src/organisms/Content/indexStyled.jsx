import styled from 'styled-components';

export const StyledContent = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, auto));
    row-gap: 30px;
    justify-items: center;
    margin: 0 auto;
    padding: 1rem;
    max-width: 1350px;
`;