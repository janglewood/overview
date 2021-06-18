import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store } from "./redux/store/index";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme } from "themes";
import "./index.css";

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
