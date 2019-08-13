import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Markdown } from './Markdown';
import { List } from './List';
import { resources } from './context';

export const Routes: React.SFC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        {Object.entries(resources).map(([key, value]) => (
          <Route
            exact={true}
            path={key}
            key={key}
            component={() => <Markdown content={value} />}
          />
        ))}
        <Route
          exact={true}
          path='/list'
          component={() => <List resources={Object.keys(resources)} />}
        />
      </Switch>
    </BrowserRouter>
  );
};
