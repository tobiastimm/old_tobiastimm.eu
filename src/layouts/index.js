import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import Helmet from 'react-helmet';
import './global-styles';
import Footer from './footer';
import Content from './content';
import Header from './header';

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

const DefaultLayout = ({ data, children }) => {
  const socialNetworks = data.allSocialNetworksJson.edges.map(edge => edge.node);
  return (
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
            <Footer socialNetworks={socialNetworks} />
          </div>
        </div>
      </Wrapper>
    </ThemeProvider>
  );
};

DefaultLayout.propTypes = {
  data: PropTypes.data,
  children: PropTypes.node,
};

DefaultLayout.defaultProps = {
  data: [],
  children: [],
};

export default DefaultLayout;

export const pageQuery = graphql`
  query SocialNetworksQuery {
    ...socialNetworks
  }
`;
