import * as React from 'react';
import { Helmet } from 'react-helmet';

import { Icon } from '@ridi/rsg';
import style from './styles';

export interface TermsContainerProps {
  title: string;
  content: React.ReactElement;
}

export const Container: React.SFC<TermsContainerProps> = ({ title, content }) => (
  <div>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <header className={style.header}>
      <Icon name="logo_ridibooks_3" className={style.ridiIcon} />
    </header>
    <main className={style.main}>
      {content}
      <footer className={style.footer}>
        <strong>
          © RIDI Corp.
        </strong>
      </footer>
    </main>
  </div>
);
