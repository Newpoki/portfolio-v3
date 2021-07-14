import { Home } from "home";
import { Route, Switch } from "react-router-dom";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  );
};
