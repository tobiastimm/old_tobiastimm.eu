import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';

const Container = styled.div`
  position: relative;
  margin: ${rem('10px')} 0;
  padding-left: 45;
`;

const EventAfter = styled.div`
  clear: both;
  content: '';
  display: table;
`;

const Bubble = styled.div`
  position: absolute;
  top: 50%;
  margintop: ${rem('9px')};
`;

const TimelineBubble = ({ title }) => (
  <Container>
    <div />
    <Bubble>
      <h4>{title}</h4>
    </Bubble>
    <EventAfter />
  </Container>
);

export default TimelineBubble;
