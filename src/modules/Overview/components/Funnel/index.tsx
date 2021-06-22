import { FC } from "react";
import { IEngagementFunnelBlockProps } from "../EngagementFunnelBlock";
import {
  StyledFunnel,
  FunnelBlockData,
  FunnelContainer,
  FunnelStageConversionData,
  Test,
} from "./styled";

const Funnel: FC<IEngagementFunnelBlockProps> = ({ baseData }) => (
  <FunnelContainer>
    {/* <Test size={"l"}>
      <div>Passerby</div> */}
    <StyledFunnel size={"l"}>
      <FunnelBlockData>{baseData.reach}</FunnelBlockData>
    </StyledFunnel>
    {/* </Test> */}
    <FunnelStageConversionData>
      {`${(baseData.reach / baseData.views.current.sum) * 100}%`}
    </FunnelStageConversionData>
    {/* <Test size={"m"}>
      <div>Views</div> */}
    <StyledFunnel size={"m"}>
      <FunnelBlockData>{baseData.views.current.sum}</FunnelBlockData>
    </StyledFunnel>
    {/* </Test> */}
    <FunnelStageConversionData>
      {`${
        (baseData.views.current.sum /
          baseData.impressionEngagement.engagement) *
        100
      }%`}
    </FunnelStageConversionData>
    {/* <Test size={"s"}>
      <div>Engagement</div> */}
    <StyledFunnel size={"s"}>
      <FunnelBlockData>
        {baseData.impressionEngagement.engagement}
      </FunnelBlockData>
    </StyledFunnel>
    {/* </Test> */}
  </FunnelContainer>
);

export default Funnel;
