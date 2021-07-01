import { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routes from './config';

function Index() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/app/welcome" />} />
        {
          routes.map(item => {
            const { path, component, name, children } = item;
            if (children) {
              return children.map(subRoute => {
                return (
                  <Route path={subRoute.path} exact component={subRoute.component} key={subRoute.name} />
                );
              })
            }
            return (
              <Route path={path} exact component={component} key={name} />
            );
          })
        }
        <Route render={() => <Redirect to="/app/404" />} />
      </Switch>
    </Suspense>
    
  );
}

export default Index;
