import React from 'react';
import styled from 'styled-components';
import { rem, em } from 'polished';

import About from '../About';

const StyledFooter = styled.footer`
  a {
    color: white;
  }
  a:hover {
    color: #bbb;
  }
`;

const Footer = () => (
  <StyledFooter
    className="navbar navbar-expand-md navbar-dark navbar-faded bg-dark text-white"
    role="contentinfo"
  >
    <div className="col-12 py-4">
      <div className="row">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <h4>Featured</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#" target="_blank">
                    Project 1
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 col-sm-6">
              <h4>Featured</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#" target="_blank">
                    Project 1
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 col-sm-6">
              <About />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="text-center">&copy; Copyright 2017 - Tobias Timm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </StyledFooter>
);

export default Footer;
