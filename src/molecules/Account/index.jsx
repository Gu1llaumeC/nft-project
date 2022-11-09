import React from "react";
import { StyledAccount, Main, StyledProfile } from "./indexStyled";

import Title2 from "../../atoms/Title2";
import AccountMenu from "../AccountMenu";

import profile from "../../assets/transparent-empty-profile.png";

const Account = ( {address, setAddress} ) => {

    // TODO: conditional rendering 

    return <StyledAccount>
        <Main>
            <Title2 text={address} />
            <StyledProfile src={profile} alt="profile" />
        </Main>
        <AccountMenu />
    </StyledAccount>;
}

export default Account;