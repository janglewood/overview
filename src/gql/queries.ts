import { gql } from "@apollo/client";

export const BaseDataQuery = gql`
  query BaseData($data: BaseDataInput!) {
    baseData(BaseDataInput: $data) {
      views {
        current {
          sum
        }
      }
      reach
      impressionEngagement {
        engagement
      }
    }
  }
`;
