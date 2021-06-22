import { gql } from "@apollo/client";

export const AuthorizeMutation = gql`
  mutation Authorize($data: AccountInput!) {
    login(AccountInput: $data) {
      token
    }
  }
`;
