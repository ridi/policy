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
        <Route
          exact={true}
          path="/ridi-pay/terms-of-use"
          component={() => <TermsContainer markdownSource={RIDIPayTermsOfUse} htmlTitle="서비스 이용약관" />}
        />
        <Route
          exact={true}
          path="/ridi-pay/privacy-policy-sharing"
          component={() => <TermsContainer markdownSource={RIDIPayPrivacyPolicySharing} htmlTitle="개인정보 제공 동의" />}
        />
        <Route
          exact={true}
          path="/ridi-pay/privacy-policy-collect-and-use"
          component={() => <TermsContainer markdownSource={RIDIPayPrivacyPolicyCollectAndUse} htmlTitle="개인정보 수집 및 이용동의" />}
        />
      </Switch>
    </BrowserRouter>
  );
};
