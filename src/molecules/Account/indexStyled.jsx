import styled from "styled-components";

export const StyledAccount = styled.div`
    position: relative;
`;

export const Main = styled.button`
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    border-radius: 20px;
    cursor: pointer;

    &:hover {
        background-color: #f2f2f2;
    }
`;

export const StyledProfile = styled.img`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin-left: 4px;
`;
