import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const SignIn = lazy(() => import('./pages/SignIn'));

const Routes = () => {
    return (
        <Suspense fallback={() => <div>loading</div>}>
          <Switch>
            <Route exact path="/" />
            <Route path="/signin" component={SignIn} />
          </Switch>
        </Suspense>
    );
  };
  
  export default Routes;
  