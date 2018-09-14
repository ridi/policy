import { Icon } from '@ridi/rsg';
import { css } from 'emotion';
import * as React from 'react';
import * as Markdown from 'react-markdown'

export interface TermsContainerProps {
  markdownSource: string;
}

export const TermsContainer: React.SFC<TermsContainerProps> = (props) => {
  return (
    <div>
      <header className={s.header}>
        <Icon name="logo_ridibooks_3" className={s.ridiIcon} />
      </header>
      <main className={s.main}>
        <Markdown source={props.markdownSource} />
        <footer className={s.footer}>
          <strong>
            © RIDI Corp.
          </strong>
        </footer>
      </main>
    </div>
  )
};

const s = {
  header: css({
    borderBottom: '1px solid #d6deeb',
    height: '43px',
    textAlign: 'center',
  }),
  ridiIcon: css({
    fill: '#1f8ce6',
    height: '16px',
    margin: '0 auto',
    marginTop: '14px',
  }),
  main: css({
    maxWidth: '767px',
    margin: '0 auto',
  }),
  footer: css({
    textAlign: 'center',
    borderTop: '1px solid #dfdfdf',
    marginTop: '20px',
    padding: '10px 0',
    color: '#40474d',
    fontSize: '13px',
  }),
}