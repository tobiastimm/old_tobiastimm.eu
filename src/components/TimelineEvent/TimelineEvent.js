import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem, em } from 'polished';
import styledProps from 'styled-props';

const EventPanel = styled.div`
  position: relative;
  float: ${props => (!props.inverted ? 'left' : 'right')};
  width: 41%;
  padding: ${props =>
    (!props.inverted
      ? `0 ${rem('20px')} ${rem('20px')} ${rem('30px')}`
      : `0 ${rem('30px')} ${rem('20px')} ${rem('20px')}`)};
  text-align: ${props => (!props.inverted ? 'right' : 'left')};

  &:before {
    right: auto;
    left: ${rem('-15px')};
    border-right-width: ${rem('15px')};
    border-left-width: 0;
  }
  &:after {
    right: auto;
    left: ${rem('-14px')};
    border-right-width: ${rem('14px')};
    border-left-width: 0;
  }
`;

const EventImage = styled.div`
  z-index: 100;
  position: absolute;
  left: 50%;
  border: ${rem('7px')} solid #3b5998;
  border-radius: 100%;
  background-color: #3b5998;
  box-shadow: 0 0 ${rem('5px')} #4582ec;
  width: ${rem('200px')};
  height: ${rem('200px')};
  margin-left: ${rem('-100px')};
`;

const EventHeading = styled.div`
  h4 {
    margin-top: ${rem('22px')};
    margin-bottom: ${rem('4px')};
    padding: 0;
    color: #b3b3b3;
  }

  h4.subheading {
    margin: 0;
    padding: 0;
    text-transform: none;
    font-size: ${rem('18px')};
    color: #333333;
  }
`;

const EventBody = styled.div`
  p,
  ul {
    margin-bottom: 0;
    color: #808080;
  }
`;

const Line = styled.div``;

const StyledElement = styled.li`

  &:nth-child(even) {
    position: relative;
    margin-bottom: ${rem('50px')};
    height: ${rem('180px')};
    right: ${rem('-100px')};
  }

  &:nth-child(odd) {
    position: relative;
    margin-bottom: ${rem('50px')};
    height: ${rem('180px')};
    left: ${rem('-100px')};
  }

  &:before,
  &:after {
    content: ' ';
    display: table;
  }

  &:after {
    clear: both;
    min-height: ${rem('170px')};
  }

  & ${EventImage} h4 {
    margin-top: ${rem('12px')};
    font-size: ${em('10px')};
    line-height: ${em('14px')};
  }

  &:nth-child(odd) ${Line}:before {
    content: '';
    position: absolute;
    top: ${rem('60px')};
    bottom: 0;
    left: ${rem('690px')};
    width: ${rem('4px')};
    height: ${rem('340px')};
    background-color: #3b5998;
    -ms-transform: rotate(-44deg); /* IE 9 */
    -webkit-transform: rotate(-44deg); /* Safari */
    transform: rotate(-44deg);
    box-shadow: 0 0 ${rem('5px')} #4582ec;
  }

  &:nth-child(even) ${Line}:before {
    content: '';
    position: absolute;
    top: ${rem('60px')};
    bottom: 0;
    left: ${rem('450px')};
    width: ${rem('4px')};
    height: ${rem('340px')};
    background-color: #3b5998;
    -ms-transform: rotate(44deg); /* IE 9 */
    -webkit-transform: rotate(44deg); /* Safari */
    transform: rotate(44deg);
    box-shadow: 0 0 ${rem('5px')} #4582ec;
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    &:nth-child(even) {
      margin-bottom: 0;
      min-height: 0;
      right: 0;
    }
    &:nth-child(odd) {
      margin-bottom: 0;
      min-height: 0;
      left: 0;
    }

    &:nth-child(even) ${EventImage} {
      left: 0;
      margin-left: 0;
    }
    &:nth-child(odd) ${EventImage} {
      left: ${rem('690px')};
      margin-left: 0;
    }

    &:nth-child(even) ${EventPanel} {
      width: 76%;
      padding: 0 0 ${rem('20px')} 0;
      text-align: left;
    }
    &:nth-child(odd) ${EventPanel} {
      width: 70%;
      padding: 0 0 ${rem('20px')} 0px;
      text-align: right;
    }
    & ${Line} {
      display: none;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    &:nth-child(even) {
      margin-bottom: 0;
      min-height: 0;
      right: 0;
    }
    &:nth-child(odd) {
      margin-bottom: 0;
      min-height: 0;
      left: 0;
    }

    &:nth-child(even) ${EventImage} {
      left: 0;
      margin-left: 0;
    }
    &:nth-child(odd) ${EventImage} {
      left: ${rem('520px')};
      margin-left: 0;
    }

    &:nth-child(even) ${EventPanel} {
      width: 70%;
      padding: 0 0 ${rem('20px')} 0;
      text-align: left;
    }
    &:nth-child(odd) ${EventPanel} {
      width: 70%;
      padding: 0 0 ${rem('20px')} 0px;
      text-align: right;
    }
    & ${Line} {
      display: none;
    }
  }

  @media only screen and (max-width: 767px) {
    &:nth-child(even) {
      margin-bottom: 0;
      min-height: 0;
      right: 0;
    }
    &:nth-child(odd) {
      margin-bottom: 0;
      min-height: 0;
      left: 0;
    }

    & ${EventImage} {
      position: static;
      width: ${rem('150px')};
      height: ${rem('150px')};
      margin-bottom: 0;
    }

    &:nth-child(even) ${EventImage} {
      left: 0;
      margin-left: 0;
    }
    &:nth-child(odd) ${EventImage} {
      float: right;
      left: 0;
      margin-left: 0;
    }

    &:nth-child(even) ${EventPanel} {
      width: 100%;
      padding: 0 0 ${rem('20px')} ${rem('14px')};
    }
    &:nth-child(odd) ${EventPanel} {
      width: 100%;
      padding: 0 ${rem('14px')} ${rem('20px')} 0;
    }
    & ${Line} {
      display: none;
    }
  }
`;
const TimelineEvent = ({
  title, subTitle, icon, children, inverted,
}) => (
  <StyledElement>
    <EventImage>
      <img className="rounded-circle img-fluid" src="http://lorempixel.com/250/250" alt="" />
    </EventImage>
    <EventPanel inverted={inverted}>
      <EventHeading>
        <h4>{title}</h4>
        <h4 className="subheading">{subTitle}</h4>
      </EventHeading>
      <EventBody>
        <p className="text-muted">{children}</p>
      </EventBody>
    </EventPanel>
    <Line />
  </StyledElement>
);

export default TimelineEvent;
