import styled from "styled-components";

export const StyledLayout = styled.main`
  display: grid;
  grid-template-areas:
    "header header"
    "nav-side-bar main-content";
  grid-template-columns: 1fr 6fr;
  grid-template-rows: 1fr 10fr;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.background.primary};
  color: ${({ theme }) => theme.palette.fonts.primary};
`;

export const StyledMainContent = styled.div`
  grid-area: main-content;
`;
