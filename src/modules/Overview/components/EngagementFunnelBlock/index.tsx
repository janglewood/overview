// Lib
import { FC } from "react";
// Components
import { MainTextContainer, EngagementFunnelBlockContainer } from "./styled";
import DataBlock from "../DataBlock";
import Funnel from "../Funnel";

export interface IEngagementFunnelBlockProps {
  baseData: {
    reach: number;
    views: { current: { sum: number } };
    impressionEngagement: { engagement: number };
  };
}

const EngagementFunnelBlock: FC<IEngagementFunnelBlockProps> = ({
  baseData,
}) => {
  return (
    <EngagementFunnelBlockContainer>
      <DataBlock
        headerText="Engagement Funnel"
        secondaryText={`The overall conversion rate within different stages
(Last week)`} // Should be exactly like this, because of css rules for newline
        gridArea="header"
      />
      <div style={{ gridArea: "finalPercent" }}>common percent</div>
      <Funnel baseData={baseData} />
    </EngagementFunnelBlockContainer>
  );
};

export default EngagementFunnelBlock;
