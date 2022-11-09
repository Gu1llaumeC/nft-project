import React from "react";
import { StyledAccount, Main, StyledProfile } from "./indexStyled";

import AccountMenu from "../AccountMenu";

import profile from "../../assets/transparent-empty-profile.png";
import Title2 from "../../atoms/Title2";

const Account = ({ address, setAddress }) => {
  // TODO: conditional rendering

  return (
    <StyledAccount>
      <Main>
        <Title2 text={address} />
        <StyledProfile src={profile} alt="profile" />
      </Main>
      <AccountMenu />
    </StyledAccount>
  );
};

export default Account;
