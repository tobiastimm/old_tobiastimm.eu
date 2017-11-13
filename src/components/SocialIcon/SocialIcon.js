import React from 'react';
import PropTypes from 'prop-types';
import { rem, em, darken } from 'polished';
import styled from 'styled-components';

const StyledIcon = styled.a`
  display: inline-block;
  width: ${rem('35px')};
  height: ${rem('35px')};
  cursor: pointer;
  font-size: ${em('25px')};
  color: #fff;
  line-height: ${rem('35px')};
  margin-right: ${rem('3px')};
  margin-bottom: ${rem('5px')};

  :hover {
    color: ${darken(0.5)('#fff')};
  }
`;

const SocialIcon = ({ link, icon, title }) => (
  <StyledIcon href={link} target="_blank" rel="noopener noreferrer">
    <i className={`fa fa-${icon}`} aria-hidden="true" title={title} />
  </StyledIcon>
);

SocialIcon.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  link: PropTypes.string.isRequired,
};

SocialIcon.defaultProps = {
  title: '',
  icon: '',
};

export default SocialIcon;
