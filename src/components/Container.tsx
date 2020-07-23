import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Global, css } from '@emotion/core';
import colors from '@ridi/colors';
import { Icon } from '@ridi/rsg';

const styles = {
  header: css`
    border-bottom: 1px solid ${colors.blueGray10};
    height: 43px;
    text-align: center;
  `,
  ridiIcon: css`
    fill: ${colors.dodgerBlue50};
    height: 16px;
    margin: 0 auto;
    margin-top: 14px;
  `,
  main: css`
    max-width: 767px;
    margin: 0 auto;
    padding: 50px 30px 10px;
    background: #fff;
    box-sizing: border-box;
  `,
  footer: css`
    text-align: center;
    border-top: 1px solid #dfdfdf;
    margin-top: 40px;
    padding: 10px 0;
    color: #40474d;
    font-size: 13px;
  `,
};

interface Props {
  title: string;
  children: React.ReactNode;
}

export function Container ({ children, title }: Props) {
  return (
    <div>
      <Global
        styles={css`
          body {
            font-family: sans-serif;
          }
          blockquote, body, button, code, dd, div, dl, dt, fieldset, form, h1, h2, h3, h4, h5, h6, html, iframe, input, legend, li, ol, p, pre, strong, td, textarea, th, ul {
            margin: 0;
            padding: 0;
          }
        `}
      />
      <Helmet defer={false}>
        <title>{title}</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Helmet>
      <header css={styles.header}>
        <Icon name="logo_ridibooks_3" css={styles.ridiIcon} />
      </header>
      <main css={styles.main}>
        {children}
        <footer css={styles.footer}>
          <strong>
            © RIDI Corp.
          </strong>
        </footer>
      </main>
    </div>
  );
}
