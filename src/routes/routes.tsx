import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

// React.Lazy doesn't support named export yet.
// https://fr.reactjs.org/docs/code-splitting.html#named-exports
const Home = lazy(() => import("./home"));
const Cv = lazy(() => import("./cv"));
const Contact = lazy(() => import("./contact"));
const NotFound = lazy(() => import("./not-found"));

export const Routes = () => {
  /* Render */

  return (
    <Suspense fallback={null}>
      <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/cv" exact component={Cv} />

        <Route path="/contact" exact component={Contact} />

        <Route path="*" component={NotFound} />
      </Switch>
    </Suspense>
  );
};
