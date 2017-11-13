import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';

const StyledList = styled.ul`
  position: relative;
  padding: ${rem('4px')} 0 0 0;
  margin-top: ${rem('22px')};
  list-style: none;
`;

const Timeline = ({ children }) => (
  <div className="container">
    <div className="col">
      <h3>Education</h3>
      <StyledList>{children}</StyledList>
    </div>
  </div>
);

Timeline.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Timeline;
