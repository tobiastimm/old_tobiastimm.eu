import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';

const Container = styled.section`
  position: relative;
  font-size: 80%;
  font-weight: 300;
  padding: ${rem('10px')} 0;
  width: 95%;
  margin: 0 auto;
`;

const TimelineStart = styled.div`
  content: '';
  position: absolute;
  top: 0;
  left: ${rem('18px')};
  height: 100%;
  width: ${rem('2px')};
  background: #a0b2b8;
`;

const TimelineEnd = styled.div`
  content: '';
  display: table;
  clear: both;
`;

const Timeline = ({ children }) => (
  <div>
    <Container>
      <TimelineStart />
      {children}
      <TimelineEnd />
    </Container>
  </div>
);

Timeline.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Timeline;
