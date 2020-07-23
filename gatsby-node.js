const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type == 'MarkdownRemark') {
    const relativeFilePath = createFilePath({
      node,
      getNode,
    })

    createNodeField({
      node,
      name: "slug",
      value: relativeFilePath,
    })
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const { data } = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            fields {
              slug
            }
            headings(depth: h1) {
              value
            }
          }
        }
      }
    }
  `);

  data.allMarkdownRemark.edges.forEach(({ node }) => {
    const {
      html,
      fields: { slug },
      headings,
    } = node;

    createPage({
      path: slug,
      component: path.resolve(`./src/templates/Markdown.tsx`),
      context: {
        html,
        title: headings[0] && headings[0].value || 'RIDIBOOKS',
      },
    })
  });
};
