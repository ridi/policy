import { Icon } from '@ridi/rsg';
import { css } from 'emotion';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import * as Markdown from 'react-markdown';
import { colors } from '../colors';

export interface TermsContainerProps {
  markdownSource: string;
  htmlTitle: string;
}

export const TermsContainer: React.SFC<TermsContainerProps> = (props) => {
  return (
    <div>
      <Helmet>
        <title>{props.htmlTitle}</title>
      </Helmet>
      <header className={s.header}>
        <Icon name="logo_ridibooks_3" className={s.ridiIcon} />
      </header>
      <main className={s.main}>
        <Markdown source={props.markdownSource} className={s.markdown} />
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
    padding: '50px 30px 10px 30px',
    background: '#fff',
    boxSizing: 'border-box',
  }),
  footer: css({
    textAlign: 'center',
    borderTop: '1px solid #dfdfdf',
    marginTop: '40px',
    padding: '10px 0',
    color: '#40474d',
    fontSize: '13px',
  }),
  markdown: css({
    'h1, h2, h3, h4, h5, h6': {
      fontWeight: 'bold',
      lineHeight: '1.3em',
    },
    'h1': {
      fontSize: '26px',
      padding: '10px 0 0 0',
      color: colors.slategray_90,
    },
    'h2': {
      fontSize: '20px',
      padding: '35px 0 0 0',
      color: '#000',
      fontWeight: 'bold',
      marginTop: '30px',
      borderTop: '1px solid #dfdfdf',
    },
    'h3': {
      fontSize: '16px',
      padding: '20px 0 0 0',
      color: '#373a3c',
      fontWeight: 'normal',
    },
    'h4, h5, h6': {
      fontSize: '14px',
      color: colors.slategray_80,
    },
    'p, a, strong, em, li': {
      fontSize: '13px',
      color: colors.slategray_80,
      lineHeight: '1.7em',
    },
    'p': {
      marginTop: '10px',
    },
    'a': {
      textDecoration: 'underline',
      color: colors["@color_dodgerblue_3"],
    },
    'em, strong': {
      fontWeight: 'bold',
    },
    'ins': {
      color: '#0089d2',
      textDecoration: 'none',
    },
    'img': {
      border: 'none',
      '-ms-interpolation-mode': 'bicubic',
    },
    'ul, ol': {
      padding: '10px 0 10px 20px',
      listStylePosition: 'outside',
      li: {
        margin: '3px 0 7px 0',
        color: colors["@color_slategray_1"],
        '&:first-child': {
          marginTop: 0,
        }
      },
    },
    'ol': {
      listStyleType: 'decimal'
    },
    'li > ol, li > ul': {
      padding: '7px 0 7px 10px',
    },
    'ul > li': {
      position: 'relative',
      '&:after': {
        content: '',
        display: 'block',
        width: '3px', height: '3px', background: colors["@color_slategray_5"],
        position: 'absolute', left: '-8px', top: '9px',
      }
    },
    table: {
      width: '100%',
      thead: {
        background: colors["@color_slategray_8"],
      },
      tbody: {
        background: colors["@color_slategray_14"],
      },
      'th, td': {
        border: `1px solid ${colors["@color_slategray_10"]}`,
        verticalAlign: 'top', padding: '10px',
        fontSize: '13px', lineHeight: '1.7em',
      },
      th: {
        textAlign: 'center', color: colors["@color_slategray_3"],
      },
      td: {
        textAlign: 'left', color: colors["@color_slategray_1"],
      }
    }
  }),
}