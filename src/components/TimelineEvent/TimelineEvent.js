import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem, em } from 'polished';

const StyledEvent = styled.div`
  position: relative;
  margin: ${rem('10px')} 0;
  padding-left: ${rem('45px')};
`;

const EventType = styled.div`
  position: absolute;
  top: 0;
  left: ${rem('3px')};
  border-radius: 50%;
  width: ${rem('30px')};
  height: ${rem('30px')};
  margin-left: ${rem('1px')};
  background: #e9f0f5;
  border: ${rem('2px')} solid #212529;
  display: flex;
`;

const IconSpan = styled.span`
  display: flex;
  width: ${rem('32px')};
  height: ${rem('32px')};
  position: relative;
  justify-content: center;
  align-self: center;
  align-items: center;
`;

const Container = styled.div`
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.117647) ${rem('0px')} ${rem('1px')} ${rem('6px')},
    rgba(0, 0, 0, 0.117647) ${rem('0px')} ${rem('1px')} ${rem('4px')};
  background-color: rgb(255, 255, 255);
`;

const ContainerBefore = styled.div`
  top: ${rem('24px')};
  left: 100%;
  border-color: transparent;
  border-left-color: #ffffff;
`;

const EventHeader = styled.div`
  background-color: #343a40;
  padding: ${rem('10px')};
  color: #fff;
`;

const EventAfter = styled.div`
  clear: both;
  content: '';
  display: table;
`;

const Message = styled.div`
  width: 98%;
  background-color: #ffffff;
  box-shadow: 0 ${rem('1px')} ${rem('3px')} 0 rgba(0, 0, 0, 0.1);
  margin-top: 1em;
  margin-bottom: 1em;
  line-height: 1.6em;
  padding: ${rem('10px')};
  min-height: ${rem('4px')};
`;

const MessageAfter = styled.div`
  clear: both;
  content: '';
  display: table;
`;

const TimelineEvent = ({ title, icon, children }) => (
  <StyledEvent>
    <EventType>
      <IconSpan>
        <i className={`fa fa-${icon}`} aria-hidden="true" title={title} />
      </IconSpan>
    </EventType>
    <Container>
      <ContainerBefore />
      <EventHeader>
        <div>{title}</div>
      </EventHeader>
      {children && (
        <Message>
          {children}
          <MessageAfter />
        </Message>
      )}
    </Container>
    <EventAfter />
  </StyledEvent>
);

export default TimelineEvent;
