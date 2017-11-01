import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Helmet from 'react-helmet';
import './global-styles';
import Footer from '../Footer';
import Content from '../Content';
import Header from '../Header';

const theme = {
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
};

const Wrapper = styled.div``;

const Template = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Wrapper className="container-fluid h-100">
      <div className="row h-100">
        <div className="col fluid d-flex flex-column p-0">
          <Helmet
            title="Tobias Timm"
            meta={[
              { name: 'description', content: 'Tobias Timm' },
              {
                name: 'keywords',
                content: 'Tobias Timm, developer, fullstack, Germany, Hamburg',
              },
            ]}
          />
          <Header />
          <Content>{children}</Content>
          <Footer />
        </div>
      </div>
    </Wrapper>
  </ThemeProvider>
);

export default Template;
