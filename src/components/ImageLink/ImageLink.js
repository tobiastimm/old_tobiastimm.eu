import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem, em } from 'polished';
import Link from 'gatsby-link';

const Container = styled.div`
  width: ${rem('100px')};
  height: ${rem('100px')};
  :before {
    content: ' ';
    display: inline-block;
    vertical-align: middle;
    height: 100%;
  }
`;

const Image = styled.img`
  display: inline-block;
  vertical-align: middle; /* vertical alignment of the inline element */
  cursor: pointer;
  filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/></filter></svg>#grayscale"); /* Firefox 3.5+ */
  filter: gray; /* IE6-9 */
  -webkit-filter: grayscale(100%); /* Chrome 19+ & Safari 6+ */
  margin: auto; /* Magic! */
  max-width: 100%;
  :hover {
    filter: none;
    -webkit-filter: grayscale(0%);
  }
`;

const ImageLink = ({ title, link, image }) => {
  if (!link) {
    return (
      <Container>
        <Image title={title} alt={title} src={image} />
      </Container>
    );
  }
  return (
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
};

ImageLink.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.node.isRequired,
};

ImageLink.defaultProps = {
  title: '',
  link: '',
};

export default ImageLink;
