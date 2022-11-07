import styled from "styled-components";

import img from "../../assets/vignette.png";

export const StyledVignette = styled.div`
    height: 405px;
    width: 250px;
    background-image: url(${img});
    background-size: cover;
    background-position: center;
    border-radius: 20px;
`;

export const StyledFilter = styled.div`
    height: 405px;
    width: 250px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 30%, rgba(145, 108, 143, 0.5) 65%, rgba(78, 6, 75, 0.9) 90%);
    border-radius: 20px;
    z-index: 1;
`;
