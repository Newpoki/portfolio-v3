import { HomeSkeleton } from "home/home-skeleton";
import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

// React.Lazy doesn't support named export yet.
// https://fr.reactjs.org/docs/code-splitting.html#named-exports
const Home = lazy(() => import("./home"));

export const Routes = () => {
  /* Render */

  return (
    <Switch>
      <Suspense fallback={<HomeSkeleton />}>
        <Route path="/" exact component={Home} />
      </Suspense>
    </Switch>
  );
};
