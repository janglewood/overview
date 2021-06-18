import styled from "styled-components";

export const StyledHeader = styled.header`
  grid-area: header;
  color: ${({ theme }) => theme.palette.fonts.primary};
  font-weight: 700;
  font-size: 1.5em;
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.palette.background.secondary};
`;
