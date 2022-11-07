import style from 'styled-components';

export const StyledHeader = style.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "button title adress";
    justify-items: center;
    padding: 50px 0;`;