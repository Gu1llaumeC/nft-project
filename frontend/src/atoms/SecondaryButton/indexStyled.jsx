import styled from "styled-components";
import colors from "../../styles/colors";

export const StyledSecondaryButton = styled.button`
  background-color: ${colors.tertiary};
  color: ${colors.textTertiary};
  border: none;
  border-radius: 1.5rem;
  padding: 0.5rem 2rem;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: ${colors.tertiaryHover};
`;
