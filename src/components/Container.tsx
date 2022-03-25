import * as React from "react";
import { Helmet } from "react-helmet";
import { Global, css } from "@emotion/core";
import colors from "@ridi/colors";

const styles = {
  header: css`
    border-bottom: 1px solid ${colors.blueGray10};
    height: 43px;
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;
  `,
  ridiIcon: css`
    width: 35px;
    height: 13px;
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

export function Container({ children, title }: Props) {
  return (
    <div>
      <Global
        styles={css`
          body {
            font-family: sans-serif;
          }
          blockquote,
          body,
          button,
          code,
          dd,
          div,
          dl,
          dt,
          fieldset,
          form,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          html,
          iframe,
          input,
          legend,
          li,
          ol,
          p,
          pre,
          strong,
          td,
          textarea,
          th,
          ul {
            margin: 0;
            padding: 0;
          }
        `}
      />
      <Helmet defer={false}>
        <title>{title}</title>

        <link
          rel="shortcut icon"
          href="{{ STATIC_URL }}/books/dist/favicon/favicon-48x48.ico?20220405"
        />
        <link
          rel="icon"
          href="{{ STATIC_URL }}/books/dist/favicon/favicon-48x48.ico?20220405"
        />

        <link
          rel="rel="
          apple-touch-icon
          sizes="57x57"
          href="/apple-touch-icon-57x57.png?20220405"
        />
        <link
          rel="rel="
          apple-touch-icon
          sizes="60x60"
          href="/apple-touch-icon-60x60.png?20220405"
        />
        <link
          rel="rel="
          apple-touch-icon
          sizes="72x72"
          href="/apple-touch-icon-72x72.png?20220405"
        />
        <link
          rel="rel="
          apple-touch-icon
          sizes="76x76"
          href="/apple-touch-icon-76x76.png?20220405"
        />
        <link
          rel="rel="
          apple-touch-icon
          sizes="114x114"
          href="/apple-touch-icon-114x114.png?20220405"
        />
        <link
          rel="rel="
          apple-touch-icon
          sizes="120x120"
          href="/apple-touch-icon-120x120.png?20220405"
        />
        <link
          rel="rel="
          apple-touch-icon
          sizes="144x144"
          href="/apple-touch-icon-144x144.png?20220405"
        />
        <link
          rel="rel="
          apple-touch-icon
          sizes="152x152"
          href="/apple-touch-icon-152x152.png?20220405"
        />
        <link
          rel="rel="
          apple-touch-icon
          sizes="167x167"
          href="/apple-touch-icon-167x167.png?20220405"
        />
        <link
          rel="rel="
          apple-touch-icon
          sizes="180x180"
          href="/apple-touch-icon-180x180.png?20220405"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png?20220405"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png?20220405"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="48x48"
          href="/favicon-48x48.png?20220405"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png?20220405"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="128x128"
          href="/favicon-128x128.png?20220405"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon-192x192.png?20220405"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="196x196"
          href="/favicon-196x196.png?20220405"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="256x256"
          href="/favicon-256x256.png?20220405"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/favicon-512x512.png?20220405"
        />

        <meta
          name="msapplication-TileImage"
          content="{{ STATIC_URL }}/books/dist/favicon/mstile-144x144.png"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <header css={styles.header}>
        <svg
          width="35"
          height="13"
          viewBox="0 0 35 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          css={styles.ridiIcon}
        >
          <title>RIDI</title>
          <path
            d="M10.9588 4.49485V4.46115C10.9588 1.86837 9.12834 0.257812 6.18122 0.257812H0V12.7498H3.12558V8.90281H5.27924L7.85978 12.7474H11.5328L8.5037 8.32985C10.0882 7.63652 10.9588 6.28596 10.9588 4.49485ZM7.79948 4.63207C7.79948 5.54689 7.12903 6.3317 6.00758 6.3317H3.12558V2.88189H5.95693C6.79862 2.88189 7.79948 3.37541 7.79948 4.59837V4.63207Z"
            fill="#1E9EFF"
          />
          <path
            d="M16.2896 0.257812H13.1641V12.7498H16.2896V0.257812Z"
            fill="#1E9EFF"
          />
          <path
            d="M24.3262 0.257812H18.5742V12.7498H24.3262C28.1704 12.7498 30.1215 10.1234 30.1215 6.50503V6.47133C30.1215 2.86985 28.1704 0.257812 24.3262 0.257812ZM26.8777 6.53633C26.8777 8.53929 25.9975 10.0295 23.9692 10.0295H21.6998V2.97578H23.9692C25.9975 2.97578 26.8777 4.478 26.8777 6.50263V6.53633Z"
            fill="#1E9EFF"
          />
          <path
            d="M34.9596 0.257812H31.834V12.7498H34.9596V0.257812Z"
            fill="#1E9EFF"
          />
        </svg>
      </header>
      <main css={styles.main}>
        {children}
        <footer css={styles.footer}>
          <strong>© RIDI Corp.</strong>
        </footer>
      </main>
    </div>
  );
}
