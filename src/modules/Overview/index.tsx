// Lib
import { FC } from "react";
import { StyledDataBlock } from "./components/DataBlock/styled";
import OverviewHeader from "./components/OverviewHeader";

// Components
import { StyledOverviewContainer, StyledOverviewData } from "./styled";

const Overview: FC = () => {
  return (
    <StyledOverviewContainer>
      <OverviewHeader />
      <StyledOverviewData>
        <StyledDataBlock>
          <div>Online Kits</div>
          <div>20/23</div>
        </StyledDataBlock>
      </StyledOverviewData>
    </StyledOverviewContainer>
  );
};

export default Overview;
