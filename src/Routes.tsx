import * as React from 'react';
import { Switch } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
// import App from './App';
import { TermsContainer } from './components/TermContainer';
import RIDIPayPrivacyPolicyCollectAndUse from './terms/ridiPay/privacy-policy-collect-and-use.md';
import RIDIPayPrivacyPolicySharing from './terms/ridiPay/privacy-policy-sharing.md';
import RIDIPayTermsOfUse from './terms/ridiPay/terms-of-use.md';

export const Routes: React.SFC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact={true} path="/ridi-pay/terms-of-use" component={() => <TermsContainer markdownSource={RIDIPayTermsOfUse} />} />
        <Route exact={true} path="/ridi-pay/privacy-policy-sharing" component={() => <TermsContainer markdownSource={RIDIPayPrivacyPolicySharing} />} />
        <Route exact={true} path="/ridi-pay/privacy-policy-collect-and-use" component={() => <TermsContainer markdownSource={RIDIPayPrivacyPolicyCollectAndUse} />} />
      </Switch>
    </BrowserRouter>
  );
};
