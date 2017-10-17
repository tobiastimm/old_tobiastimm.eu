import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem, darken } from 'polished';
import Link from 'gatsby-link';

const StyledLink = styled.a`
  display: inline-block;
  position: relative;
  color: #fff;
  cursor: pointer;
  overflow: hidden;
  text-decoration: none;

  :hover {
    color: #fff;
    text-decoration: none;
  }

  :after {
    content: '' attr(data-hover-label) '';
    width: 0;
    overflow: hidden;
    transition: width 0.2s ease-out;

    position: absolute;
    left: 0;
    top: 0;
  }
  :focus {
    outline: none;
  }
  :hover:after,
  :focus:after {
    width: 100%;
  }
  :after {
    color: ${darken(0.5)('#fff')};
  }
`;

const GatsbyLink = ({ title, className, link }) => (
  <StyledLink to={link} className={className} data-hover-label={title}>
    {title}
  </StyledLink>
);

GatsbyLink.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  link: PropTypes.string.isRequired
};

GatsbyLink.defaultProps = {
  title: '',
  className: ''
};

const ExternalLink = ({ title, className, link }) => (
  <StyledLink
    className={className}
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    data-hover-label={title}
  >
    {title}
  </StyledLink>
);

ExternalLink.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  link: PropTypes.string.isRequired
};

ExternalLink.defaultProps = {
  title: '',
  className: ''
};

const ConditionalLink = props => {
  if (props.link && props.link.includes('http')) {
    return <ExternalLink {...props} />;
  }
  return <GatsbyLink {...props} />;
};

ConditionalLink.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  link: PropTypes.string.isRequired
};

ConditionalLink.defaultProps = {
  className: '',
  title: ''
};
export default ConditionalLink;
