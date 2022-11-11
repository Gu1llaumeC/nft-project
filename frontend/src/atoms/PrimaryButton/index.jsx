import React from "react";
import { StyledPrimaryButton } from "./indexStyled";

const PrimaryButton = ({ label, loading, loadingLabel, onClick }) => {
  return (
    <StyledPrimaryButton onClick={onClick}>
      {loading ? loadingLabel : label}
    </StyledPrimaryButton>
  );
};

export default PrimaryButton;
