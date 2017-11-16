import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { rem, em } from 'polished';
import FooterSection from '../FooterSection';
import SocialNetworks from '../SocialNetworks';

const ResumeButton = styled.a`
  font-size: ${em('12px')};
  display: inline-block;
  padding: ${rem('10px')};
  border: 1px solid #fff;
  text-transform: uppercase;
`;

const About = ({ socialNetworks }) => (
  <FooterSection title="Tobias Timm">
    <SocialNetworks networks={socialNetworks} />
    <p>
      <ResumeButton target="_blank" rel="noopener noreferrer">
        Download Résumé
      </ResumeButton>
    </p>
  </FooterSection>
);

export default About;

