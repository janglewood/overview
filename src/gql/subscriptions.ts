import { gql } from "@apollo/client";

export const OnlineKitsIds = gql`
  subscription PingServiceDashboard {
    pingServiceDashboard
  }
`;
