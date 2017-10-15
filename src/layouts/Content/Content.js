import React from 'react';
import styled from 'styled-components';
import { rem, em } from 'polished';

const Container = styled.section`
  flex: 1;
`;

const Content = ({ children }) => (
  <Container>
    <div className="container py-4">
      <div className="row">{children()}</div>
    </div>
  </Container>
);
export default Content;
