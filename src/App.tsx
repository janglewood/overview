import Layout from "components/Layout";
import { RoutesManager } from "components/RoutesManager";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => (
  <Router>
    <Layout>
      <RoutesManager />
    </Layout>
  </Router>
);

export default App;
