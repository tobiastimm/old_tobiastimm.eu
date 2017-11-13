import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem, darken } from 'polished';
import Link from 'gatsby-link';

const StyledLink = styled.a`
  display: inline-block;
  color: #fff;
  cursor: pointer;
  text-decoration: none;

  :hover {
    color: ${darken(0.5)('#fff')};
    text-decoration: none;
  }
`;

const StyledGatsbyLink = styled(Link)`
  display: inline-block;
  color: #fff;
  cursor: pointer;
  text-decoration: none;

  :hover {
    color: ${darken(0.5)('#fff')};
    text-decoration: none;
  }
`;

const GatsbyLink = ({ title, className, link }) => (
  <StyledGatsbyLink to={link} className={className}>
    {title}
  </StyledGatsbyLink>
);

GatsbyLink.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  link: PropTypes.string.isRequired,
};

GatsbyLink.defaultProps = {
  title: '',
  className: '',
};

const ExternalLink = ({ title, className, link }) => (
  <StyledLink className={className} href={link} target="_blank" rel="noopener noreferrer">
    {title}
  </StyledLink>
);

ExternalLink.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  link: PropTypes.string.isRequired,
};

ExternalLink.defaultProps = {
  title: '',
  className: '',
};

const ConditionalLink = (props) => {
  if (props.link && props.link.includes('http')) {
    return <ExternalLink {...props} />;
  }
  return <GatsbyLink {...props} />;
};

ConditionalLink.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  link: PropTypes.string.isRequired,
};

ConditionalLink.defaultProps = {
  className: '',
  title: '',
};
export default ConditionalLink;
