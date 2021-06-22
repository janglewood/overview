import styled from "styled-components";

export const StyledDataBlock = styled.div<{ gridArea: any; theme: any }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.palette.background.secondary};
  padding: ${({ gridArea }) => (gridArea ? 0 : "1rem")};
  border-radius: 10px;
  grid-area: ${({ gridArea }) => gridArea};
`;

export const Text = styled.div`
  color: ${({ theme }) => theme.palette.fonts.primary};
  font-size: inherit;
`;
export const HeaderText = styled(Text)`
  color: ${({ theme }) => theme.palette.fonts.primary};
  font-size: 1.5em;
  font-weight: 700;
`;

export const SecondaryText = styled(Text)`
  color: ${({ theme }) => theme.palette.fonts.secondary};
  font-weight: 400;
  white-space: break-spaces;
`;
