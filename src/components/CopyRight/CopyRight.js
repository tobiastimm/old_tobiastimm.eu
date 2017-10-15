import React from 'react';
import PropTyes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';

const Wrapper = styled.div`
  overflow: hidden;
  height: ${rem('50px')};
  line-height: ${rem('50px')};
  color: rgba(255, 255, 255, 0.6);
  background-color: rgba(0, 0, 0, 0.2);
  text-align: center;
  font-size: 0.9rem;
`;

const CopyRight = () => (
  <Wrapper className="footer-copyright">
    <div className="container-fluid">
      © 2017 Copyright:{' '}
      <a href="https://tobiastimm.eu">
        <strong> Tobias Timm</strong>
      </a>
    </div>
  </Wrapper>
);

export default CopyRight;
