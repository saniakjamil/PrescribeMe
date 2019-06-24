import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
// const Dashboard = lazy(() => import("./pages/Dashboard"));
// const Dashboard = lazy(() => import("./pages/Dashboard"));

const Routes = () => {
  return (
    <Suspense fallback={() => <div>loading...</div>}>
      <Switch>
        <Route exact path="/" />
        <Route path="/signin" component={SignIn} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
