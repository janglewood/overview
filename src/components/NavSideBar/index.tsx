// Libs
import { FC, useEffect, useRef } from "react";
import { Router as BrowserRouter } from "react-router-dom";

// hooks
import { useTheme } from "styled-components";
import { useSelector } from "react-redux";
import { StyledUl, StyledNavSideBar, StyledLi, StyledLink } from "./styled";

// constants
import { routesConstants } from "constants/routes";

// selectors

export const NavSideBar: FC = () => {
  return (
    <StyledNavSideBar>
      <StyledUl>
        <StyledLi>
          <StyledLink to="/" exact={true}>
            {routesConstants.HOME}
          </StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/overview">{routesConstants.OVERVIEW}</StyledLink>
        </StyledLi>
      </StyledUl>
    </StyledNavSideBar>
  );
};
