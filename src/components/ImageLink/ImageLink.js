import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem, em } from 'polished';
import Link from 'gatsby-link';

const Container = styled.div`
  width: ${rem('100px')};
  height: ${rem('100px')};
`;
const Image = styled.img`
  cursor: pointer;
  filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/></filter></svg>#grayscale"); /* Firefox 3.5+ */
  filter: gray; /* IE6-9 */
  -webkit-filter: grayscale(100%); /* Chrome 19+ & Safari 6+ */
  max-width: 100%;
  :hover {
    filter: none;
    -webkit-filter: grayscale(0%);
  }
`;

const ImageLink = ({ title, link, image }) => (
  <Container>
    {link.includes('http') ? (
      <a href={`${link}`} title={title}>
        <Image alt={title} src={image} />
      </a>
    ) : (
      <Link to={link} title={title}>
        <Image alt={title} src={image} />
      </Link>
    )}
  </Container>
);

ImageLink.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired,
};

ImageLink.defaultProps = {
  title: '',
};

const ConditionalImageLink = (props) => {
  if (props.link && props.link.includes('http')) {
    return <ExternalLink {...props} />;
  }
  return <GatsbyLink {...props} />;
};

export default ImageLink;
