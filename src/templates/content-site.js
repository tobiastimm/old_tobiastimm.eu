import React from "react";
import Helmet from "react-helmet";

export default function Template({ data, pathContext }) {
  const { markdownRemark: post } = data; // data.markdownRemark holds our post data
  return (
    <div className="container-fluid">
      <div className="content-site-container">
        <Helmet title={`${post.frontmatter.title}`} />
        <div className="row">
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query ContentSiteByPath($refPath: String!) {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    markdownRemark(frontmatter: { path: { eq: $refPath } }) {
      html
      excerpt
      frontmatter {
        path
        title
      }
    }
  }
`;
