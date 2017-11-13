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

const socialNetworks = [
  {
    link: 'mailto:tbs.timm@gmail.com',
    icon: 'envelope',
    title: 'Mail',
  },
  {
    link: 'https://github.com/TobiasTimm',
    icon: 'github',
    title: 'GitHub',
  },
  {
    link: 'https://stackoverflow.com/users/4943147/tobias-timm',
    icon: 'stack-overflow',
    title: 'Stack Overflow',
  },
  {
    link: 'https://twitter.com/TbsTimm',
    icon: 'twitter',
    title: 'Twitter',
  },
  {
    link: 'https://www.linkedin.com/in/tbstimm',
    icon: 'linkedin',
    title: 'LinkedIn',
  },
  {
    link: 'https://www.xing.com/profile/Tobias_Timm4',
    icon: 'xing',
    title: 'Xing',
  },
];

const About = () => (
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
