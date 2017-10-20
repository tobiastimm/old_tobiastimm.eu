import React from 'react';
import PropTyes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';
import ConditionalLink from '../ConditionalLink';

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
      <ConditionalLink title="Tobias Timm" link="https://tobiastimm.eu">
      </ConditionalLink>
    </div>
  </Wrapper>
);

export default CopyRight;
