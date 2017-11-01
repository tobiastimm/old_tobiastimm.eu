import React from 'react';
import PropTypes from 'prop-types';
import Template from './Template';

const TemplateWrapper = ({ children }) => <Template>{children}</Template>;

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
