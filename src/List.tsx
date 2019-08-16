import * as React from 'react';
import { Link } from 'react-router-dom';

import { css } from 'emotion';
import { Container } from './Container';

export interface Props {
  resources: string[];
}

export const List: React.SFC<Props> = ({ resources }) => (
  <Container
    title='RIDI'
    content={(
      <ul className={style}>
          {resources.map(r => (
            <li key={r}>
              <Link to={r}>
                {r}
              </Link>
            </li>
          ))}
        </ul>
    )}
  />
);

const style = css({
  li: {
    listStyle: 'none',
    margin: '.5em 0',
  },
});
