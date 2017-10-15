import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import './global-styles';
import Footer from '../Footer';
import Content from '../Content';
import Header from '../Header';

const Wrapper = styled.div``;

const Template = ({ children }) => (
  <Wrapper className="container-fluid h-100">
    <div className="row h-100">
      <div className="col fluid d-flex flex-column p-0">
        <Helmet
          title="Tobias Timm"
          meta={[
            { name: 'description', content: 'Tobias Timm' },
            {
              name: 'keywords',
              content: 'Tobias Timm, developer, fullstack, Germany, Hamburg'
            }
          ]}
        />
        <Header />
        <Content>{children}</Content>
        <Footer />
      </div>
    </div>
  </Wrapper>
);

export default Template;
