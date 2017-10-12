import React from 'react';
import { rem, em } from 'polished';
import styled from 'styled-components';
import SocialIcon from '../SocialIcon/SocialIcon';

const Wrapper = styled.div``;

const SocialNetworks = ({ networks }) => (
  <Wrapper>{networks.map(network => <SocialIcon key={network.title} {...network} />)}</Wrapper>
);

export default SocialNetworks;
