// Lib
import { FC } from "react";

// Components
import { StyledLayout, StyledMainContent } from "./styled";

import { NavSideBar } from "components/NavSideBar";
import { Header } from "components/Header";

const Layout: FC = ({ children }: any) => {
  return (
    <StyledLayout>
      <Header />
      <NavSideBar />
      <StyledMainContent>{children}</StyledMainContent>
    </StyledLayout>
  );
};

export default Layout;
