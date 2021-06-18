import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const StyledNavSideBar = styled.nav`
  padding: 2rem 1rem;
  grid-area: nav-side-bar;
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledLi = styled.li`
  display: flex;
  width: 100%;
`;

const activeClassName = "active";

export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  &.${activeClassName} {
    font-weight: 700;
    background-color: ${({ theme }) =>
      theme.palette.background.activeNavButton};
    padding: 0.5rem 2rem;
    border-radius: 40px;
  }
  color: ${({ theme }) => theme.palette.fonts.primary};
  font-weight: 400;
  padding: 0 2rem;
  width: 100%;
`;
