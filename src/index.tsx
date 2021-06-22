import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store } from "./redux/store/index";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme } from "themes";
import "./index.css";
import { ApolloProvider } from "@apollo/client";
import { gqlClient } from "./gql/apollo-config";

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <ApolloProvider client={gqlClient}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </ApolloProvider>
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
