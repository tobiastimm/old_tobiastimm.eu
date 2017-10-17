import React from 'react';
import styled from 'styled-components';
import { rem, em, darken } from 'polished';

import About from '../../components/About';
import CopyRight from '../../components/CopyRight';
import FooterSection from '../../components/FooterSection';
import ConditionalLink from '../../components/ConditionalLink';

const StyledFooter = styled.footer``;


const Footer = () => (
  <StyledFooter className="bg-dark text-white center-on-small-only unique-color-dark pt-0">
    <div className="container mt-5 mb-4 text-center text-md-left">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mb-r">
          <About />
        </div>

        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-r">
          <FooterSection title="Site">
            <p>
              <ConditionalLink title="Career" />
            </p>
            <p>
              <ConditionalLink title="Education" />
            </p>
            <p>
              <ConditionalLink title="Skills" />
            </p>
            <p>
              <ConditionalLink title="Site notice" />
            </p>
          </FooterSection>
        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-r">
          <FooterSection title="Projects">
            <p>
              <ConditionalLink title="Bookmark Manager" />
            </p>
            <p>
              <ConditionalLink title="tobiastimm.eu" />
            </p>
            <p>
              <ConditionalLink title="react-connect4" />
            </p>
            <p>
              <ConditionalLink title="more..." />
            </p>
          </FooterSection>
        </div>
        <div className="col-md-4 col-lg-3 col-xl-3">
          <FooterSection title="Useful links">
            <p>
              <ConditionalLink title="Blog" />
            </p>
            <p>
              <ConditionalLink
                title="Reddit - JavaScript"
                link="https://www.reddit.com/r/javascript/"
              />
            </p>
            <p>
              <ConditionalLink
                title="Reddit - react"
                link="https://www.reddit.com/r/reactjs/"
              />
            </p>
            <p>
              <ConditionalLink
                title="Gatsby"
                link="https://github.com/gatsbyjs/gatsby"
              />
            </p>
          </FooterSection>
        </div>
      </div>
    </div>
    <CopyRight />
  </StyledFooter>
);

export default Footer;
