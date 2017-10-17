const path = require("path");
const Promise = require("bluebird");

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const contentSite = path.resolve(`src/templates/content-site.js`);

  return graphql(`
    {
      site {
        siteMetadata {
          siteUrl
          title
          description
        }
      }
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            excerpt(pruneLength: 250)
            html
            id
            frontmatter {
              title
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      console.log(result.errors);
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: contentSite,
        context: {} // additional data can be passed via context
      });
    });
  });
};
