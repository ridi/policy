import * as React from 'react';

import { Icon } from '@ridi/rsg';
import style from '../styles';

export const Container: React.FunctionComponent = ({ children }) => (
  <div>
    <header className={style.header}>
      <Icon name="logo_ridibooks_3" className={style.ridiIcon} />
    </header>
    <main className={style.main}>
      {children}
      <footer className={style.footer}>
        <strong>
          © RIDI Corp.
        </strong>
      </footer>
    </main>
  </div>
);
