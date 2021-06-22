// Lib
import { FC } from "react";

// Components
import { StyledOverviewHeader, StyledOverviewHeaderTitle } from "./styled";

const OverviewHeader: FC = () => {
  return (
    <StyledOverviewHeader>
      <StyledOverviewHeaderTitle>Realtime Overview</StyledOverviewHeaderTitle>
      {/* <StyledOverviewDropdown label="KitGroup" /> */}
      <div>Kit Group</div>
    </StyledOverviewHeader>
  );
};

export default OverviewHeader;
