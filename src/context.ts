const context = require.context('../resources', true, /\.md$/);

export const resources = context.keys().reduce((acc: typeof resources, cur) => {
  const key = cur.replace(/^\.\//, '/').replace(/\.md$/, '');
  acc[key] = context(cur).default;
  return acc;
}, {}) as { [key: string]: string };
