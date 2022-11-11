import React from "react";
import { StyledSecondaryButton } from "./indexStyled";

const SecondaryButton = ({ label, onClick }) => {
  return (
    <StyledSecondaryButton onClick={onClick}>{label}</StyledSecondaryButton>
  );
};

export default SecondaryButton;
