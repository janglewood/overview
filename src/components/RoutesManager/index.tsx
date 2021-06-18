import Overview from "modules/Overview";
import { Switch, Route } from "react-router-dom";

export const RoutesManager = () => (
  <>
    <Switch>
      <Route path="/overview">
        <Overview />
      </Route>
      <Route path="/">
        <div>Comming soon...</div>
      </Route>
    </Switch>
  </>
);
