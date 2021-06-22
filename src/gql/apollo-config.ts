import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  HttpLink,
  split,
  from,
} from "@apollo/client";

import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/client/link/ws";

const httpLink = new HttpLink({
  uri: "https://api.outernets.ai/graphql",
});

const wsLink = new WebSocketLink({
  uri: "wss://api.outernets.ai/graphql",
  options: {
    reconnect: true,
    // It's doesn't set auth header

    // connectionParams: () => ({
    //   authorization: `Bearer ${localStorage.getItem("gqlToken")}`,
    // }),
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers }: any) => ({
    headers: {
      ...headers,
      authorization: `Bearer ${localStorage.getItem("gqlToken")}`,
    },
  }));
  return forward(operation);
});

export const gqlClient = new ApolloClient({
  link: from([authLink, splitLink]),
  cache: new InMemoryCache(),
});
