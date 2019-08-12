import * as React from 'react';
import { Helmet } from 'react-helmet';
import * as Markdown from 'react-markdown';

import { Icon } from '@ridi/rsg';
import colors from '@ridi/colors';
import { css } from 'emotion';

export interface TermsContainerProps {
  content: string;
}

export const Container: React.SFC<TermsContainerProps> = ({ content }) => {
  const [, title,] = /#(.+)\n/.exec(content) || [, 'RIDIBOOKS'];
  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <header className={s.header}>
        <Icon name="logo_ridibooks_3" className={s.ridiIcon} />
      </header>
      <main className={s.main}>
        <Markdown source={content} className={s.markdown} />
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
    borderBottom: `1px solid ${colors.blueGray10}`,
    height: '43px',
    textAlign: 'center',
  }),
  ridiIcon: css({
    fill: colors.dodgerBlue50,
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
      color: colors.slateGray90,
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
      color: colors.slateGray80,
    },
    'p, a, strong, em, li': {
      fontSize: '13px',
      color: colors.slateGray80,
      lineHeight: '1.7em',
    },
    'p': {
      marginTop: '10px',
    },
    'a': {
      textDecoration: 'underline',
      color: colors.dodgerBlue50,
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
      msInterpolationMode: 'bicubic',
    },
    'ul, ol': {
      padding: '10px 0 10px 20px',
      listStylePosition: 'outside',
      li: {
        margin: '3px 0 7px 0',
        color: colors.slateGray60,
        '&:first-of-type': {
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
        content: '""',
        display: 'block',
        width: '3px', height: '3px', background: colors.slateGray50,
        position: 'absolute', left: '-8px', top: '9px',
      }
    },
    table: {
      width: '100%',
      thead: {
        background: colors.slateGray10,
      },
      tbody: {
        background: colors.lightSteelBlue5
      },
      'th, td': {
        border: `1px solid ${colors.slateGray20}`,
        verticalAlign: 'top', padding: '10px',
        fontSize: '13px', lineHeight: '1.7em',
      },
      th: {
        textAlign: 'center', color: colors.slateGray80,
      },
      td: {
        textAlign: 'left', color: colors.slateGray60,
      }
    }
  }),
}
