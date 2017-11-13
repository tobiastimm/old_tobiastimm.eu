import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  .title {
    text-transform: uppercase;
  }
`;

const HorizontalLine = styled.hr`
  background-color: #fff !important;
  width: 60px;
`;

const FooterSection = ({ title, children }) => (
  <Wrapper>
    <h6 className="title">
      <strong>{title}</strong>
    </h6>
    <HorizontalLine className="mb-4 mt-0 d-inline-block mx-auto" />
    {children}
  </Wrapper>
);

FooterSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element),
};

FooterSection.defaultProps = {
  children: [],
};

export default FooterSection;
