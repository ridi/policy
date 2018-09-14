import { injectGlobal } from 'emotion';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Routes } from './Routes';

injectGlobal({
  body: {
    fontFamily: 'sans-serif',
  },
  'blockquote, body, button, code, dd, div, dl, dt, fieldset, form, h1, h2, h3, h4, h5, h6, html, iframe, input, legend, li, ol, p, pre, strong, td, textarea, th, ul': {
    margin: 0,
    padding: 0,
  },
})

ReactDOM.render(
  <Routes />,
  document.getElementById('root') as HTMLElement
);
