import * as React from 'react';
import { Switch } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
// import App from './App';
import { TermsContainer } from './components/TermContainer';
import RIDIPayGeneral from './terms/ridiPay/general.md';
import RIDIPayPrivacy from './terms/ridiPay/privacy.md';

export const Routes: React.SFC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact={true} path="/ridi-pay/general" component={() => <TermsContainer markdownSource={RIDIPayGeneral} />} />
        <Route exact={true} path="/ridi-pay/privacy" component={() => <TermsContainer markdownSource={RIDIPayPrivacy} />} />
      </Switch>
    </BrowserRouter>
  );
};
