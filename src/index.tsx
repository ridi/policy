import { injectGlobal } from 'emotion';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Routes } from './Routes';

injectGlobal({
  body: {
    margin: 0,
    padding: 0,
    fontFamily: 'sans-serif',
  }
})

ReactDOM.render(
  <Routes />,
  document.getElementById('root') as HTMLElement
);
