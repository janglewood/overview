import styled from "styled-components";

export const Text = styled.div<{ theme: any; online?: boolean }>`
  color: ${({ theme, online }) =>
    online ? theme.palette.fonts.mainRed : theme.palette.fonts.primary};
  font-size: inherit;
  font-weight: 700;
`;

export const MainTextContainer = styled.div`
  display: flex;
  align-self: center;
  padding: 2rem;
  font-size: 2em;
`;
