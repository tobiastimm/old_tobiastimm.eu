import React from 'react';
import { rem, em } from 'polished';
import styled from 'styled-components';
import SocialIcon from '../SocialIcon/SocialIcon';

const Wrapper = styled.p``;

const SocialNetworks = ({ networks }) => (
  <Wrapper>{networks.map(network => <SocialIcon key={network.title} {...network} />)}</Wrapper>
);

export default SocialNetworks;

export const socialNetworksQuery = graphql`
  fragment socialNetworks on RootQueryType {
    allSocialNetworksJson {
      edges {
        node {
          title
          icon
          link
        }
      }
    }
  }
`;
