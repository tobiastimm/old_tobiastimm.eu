import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { rem, em } from 'polished';
import SocialNetworks from '../SocialNetworks';

const AboutContainer = styled.div`
  * {
    margin-bottom: ${rem('15px')};
  }
`;

const FooterButton = styled.a`
  font-size: ${em('12px')};
  display: inline-block;
  padding: ${rem('10px')};
  border: 1px solid #fff;
  text-transform: uppercase;
`;

const HomeLink = styled(Link)`
  color: #ddd;
`;

const socialNetworks = [
  {
    link: 'https://github.com/TobiasTimm',
    icon: 'github',
    title: 'GitHub'
  },
  {
    link: 'https://stackoverflow.com/users/4943147/tobias-timm',
    icon: 'stack-overflow',
    title: 'Stack Overflow'
  },
  {
    link: 'https://twitter.com/TbsTimm',
    icon: 'twitter',
    title: 'Twitter'
  },
  {
    link: 'https://www.linkedin.com/in/tbstimm',
    icon: 'linkedin',
    title: 'LinkedIn'
  },
  {
    link: 'https://www.xing.com/profile/Tobias_Timm4',
    icon: 'xing',
    title: 'Xing'
  }
];

const About = () => (
  <AboutContainer>
    <HomeLink to="/">
      <h4>Tobias Timm</h4>
    </HomeLink>
    <SocialNetworks networks={socialNetworks} />
    <FooterButton target="_blank" rel="noopener noreferrer">
      Download Résumé
    </FooterButton>
  </AboutContainer>
);

export default About;
