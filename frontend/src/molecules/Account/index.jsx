import React from "react";
import { StyledAccount, Main, StyledProfile } from "./indexStyled";
import profile from "../../assets/transparent-empty-profile.png";
import Title2 from "../../atoms/Title2";

const Account = ({ address, onClick }) => {
  return (
    <StyledAccount onClick={() => onClick()}>
      <Main>
        <Title2 text={address} />
        <StyledProfile src={profile} alt="profile" />
      </Main>
    </StyledAccount>
  );
};

export default Account;
