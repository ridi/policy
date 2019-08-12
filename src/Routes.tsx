import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Container } from './Container';

const context = require.context('../resources', true, /\.md$/);
const resources = context.keys().reduce((acc: typeof resources, cur) => {
  const key = cur.replace(/^\.\//, '/').replace(/\.md$/, '');
  acc[key] = context(cur).default;
  return acc;
}, {}) as { [key: string]: string };

export const Routes: React.SFC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        {Object.entries(resources).map(([key, value]) => (
          <Route
            exact={true}
            path={key}
            key={key}
            component={() => <Container content={value} />}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
};
