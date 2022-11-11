import styled from "styled-components";
import colors from "../../styles/colors";

export const StyledPrimaryButton = styled.button`
  background-color: ${colors.secondary};
  color: ${colors.textSecondary};
  border: none;
  border-radius: 1.5rem;
  padding: 0.5rem 2rem;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${colors.tertiary};
    color: ${colors.textTertiary};
    padding: 0.5rem 2.5rem;
    border-radius: 1.5rem;
  }
`;
