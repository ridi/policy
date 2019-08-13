import { css } from 'emotion';
import colors from '@ridi/colors';

export default {
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
}
