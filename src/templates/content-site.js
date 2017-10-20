import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { rem, darken } from 'polished';

const Wrapper = styled.div`
  a {
    color: #212529;
    cursor: pointer;
    overflow: hidden;
    text-decoration: none;
  }

  a:hover {
    color: ${darken(0.5)('#fff')};
    text-decoration: none;
  }
`;

const ContentSite = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Wrapper className="container-fluid">
      <Helmet title={`${post.frontmatter.title}`} />
      <h2>{post.frontmatter.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Wrapper>
  );
};

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
`;
