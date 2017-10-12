import React from 'react';
import { rem, em } from 'polished';
import styled from 'styled-components';

const StyledIcon = styled.a`
  font-size: ${em('32px')};
  line-height: ${rem('32px')};
  padding-right: ${rem('10px')};
`;

const SocialIcon = ({ link, icon, title }) => (
  <StyledIcon href={link} target="_blank" rel="noopener noreferrer">
    <i className={`fa fa-${icon}`} aria-hidden="true" title={title} />
    <span className="sr-only">{title}</span>
  </StyledIcon>
);

export default SocialIcon;
