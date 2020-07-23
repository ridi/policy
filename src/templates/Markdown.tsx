import * as React from 'react';

import { css } from '@emotion/core';
import colors from '@ridi/colors';

import { Container } from '../components/Container';

export interface Props {
  pageContext: {
    title: string;
    html: string;
  }
}

export default ({ pageContext }: Props) => (
  <Container title={pageContext.title}>
    <div
      dangerouslySetInnerHTML={{__html: pageContext.html }}
      css={style}
    />
  </Container>
);

const style = css({
  'h1, h2, h3, h4, h5, h6': {
  },
  'h1': {
    padding: '10px 0 10px 0',
    color: colors.slateGray90,
  },
  'h2': {
    padding: '35px 0 0 0',
    marginTop: '30px',
    borderTop: '1px solid #dfdfdf',
  },
  'h3': {
    padding: '20px 0 0 0',
    color: colors.slateGray80,
    fontWeight: 'normal',
  },
  'h4, h5, h6': {
    color: colors.slateGray80,
  },
  'p, a, strong, em, li': {
    color: colors.slateGray80,
    lineHeight: '1.7em',
  },
  'p': {
    marginTop: '10px',
  },
  'a': {
    color: colors.dodgerBlue50,
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
    listStyle: 'none',
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
      lineHeight: '1.7em',
    },
    th: {
      textAlign: 'center', color: colors.slateGray80,
    },
    td: {
      textAlign: 'left', color: colors.slateGray60,
    }
  }
});
