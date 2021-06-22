import Layout from "components/Layout";
import { RoutesManager } from "components/RoutesManager";
import { BrowserRouter as Router } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { AuthorizeMutation } from "gql/mutations";
import { useEffect } from "react";

const App = () => {
  const [authorize, { data }] = useMutation(AuthorizeMutation);

  useEffect(() => {
    if (!data) {
      authorize({
        variables: {
          data: {
            username: "admin2017",
            password: "out#rn#ts12!@",
          },
        },
      });
    } else {
      localStorage.setItem("gqlToken", data.login.token);
    }
  }, [data]);

  return (
    <Router>
      <Layout>
        <RoutesManager />
      </Layout>
    </Router>
  );
};

export default App;
