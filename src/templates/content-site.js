import React from "react";
import Helmet from "react-helmet";
import styled from 'styled-components';

const ContentSite = ({ data }) => {
  const { markdownRemark: post } = data; // data.markdownRemark holds our post data
  return (
    <div className="container-fluid">
      <div className="content-site-container">
        <Helmet title={`${post.frontmatter.title}`} />
        <div className="row">
          <h2>{post.frontmatter.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    </div>
  );
}

export default ContentSite;

export const pageQuery = graphql`
query ContentSiteByPath($path: String!) {
  site {
    siteMetadata {
      title
      author
    }
  }
  markdownRemark(frontmatter: { path: { eq: $path } }) {
    id
    html
    frontmatter {
      title
    }
  }
}
`