const _ = require('lodash');
const path = require('path');
const Promise = require('bluebird');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const pages = [];
    const contentSite = path.resolve('src/templates/content-site.js');
    resolve(graphql(`
        {
          allMarkdownRemark(limit: 1000) {
            edges {
              node {
                frontmatter {
                  path
                }
              }
            }
          }
        }
      `).then((result) => {
      if (result.errors) {
        console.log(result.errors);
        return Promise.reject(result.errors);
      }

      _.each(result.data.allMarkdownRemark.edges, (edge) => {
        createPage({
          path: edge.node.frontmatter.path,
          component: contentSite,
          context: {
            path: edge.node.frontmatter.path,
          },
        });
      });
    }));
  });
};
