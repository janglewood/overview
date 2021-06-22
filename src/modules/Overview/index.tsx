// Lib
import { FC, useEffect, useMemo } from "react";
import { useSubscription, gql, useQuery } from "@apollo/client";
// Components
import OnlineKitsBlock from "./components/OnlineKitsBlock";
import EngagementFunnelBlock from "./components/EngagementFunnelBlock";
import { StyledOverviewContainer, StyledOverviewData } from "./styled";
import OverviewHeader from "./components/OverviewHeader";
import { StyledDataBlock } from "./components/DataBlock/styled";
// GQL
import { BaseDataQuery } from "gql/queries";
import { OnlineKitsIds } from "gql/subscriptions";

const useFetchOverviewData = () => {
  const { data: OnlineKitsIdsData, loading: OnlineKitsIdsLoading } =
    useSubscription(OnlineKitsIds);
  const {
    data: BaseDataData,
    loading: BaseDataLoading,
    error: BaseDataError,
  } = useQuery(BaseDataQuery, {
    variables: {
      data: {
        from: useMemo(() => Date.now() - 1000 * 60 * 60 * 24 * 7, []),
        to: useMemo(() => Date.now(), []), // TO FIX: this is fetching twice
        interval: "1d",
        kitOffset: 0,
      },
    },
  });

  const loaded = useMemo(
    () =>
      [BaseDataLoading, OnlineKitsIdsLoading].every(
        (loadingItem) => !loadingItem
      ),
    [BaseDataLoading, OnlineKitsIdsLoading]
  );
  return [OnlineKitsIdsData, BaseDataData, !loaded];
};

const Overview: FC = () => {
  const [OnlineKitsIdsData, BaseDataData, loading = true] =
    useFetchOverviewData();
  return loading ? (
    <div>Loading...</div>
  ) : (
    <StyledOverviewContainer>
      <OverviewHeader />
      <StyledOverviewData>
        <OnlineKitsBlock
          total={100}
          online={OnlineKitsIdsData?.pingServiceDashboard.length}
        />
        <EngagementFunnelBlock {...BaseDataData} />
      </StyledOverviewData>
    </StyledOverviewContainer>
  );
};

export default Overview;
