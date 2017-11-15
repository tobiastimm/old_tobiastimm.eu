import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem, em } from 'polished';
import ImageLink from '../components/ImageLink';

import java from '../assets/images/java/java.svg';
import javascript from '../assets/images/javascript/javascript.svg';

const ProgrammingLanguages = styled.div`
  display: flex;
`;

const SkillsPage = ({}) => (
  <div>
    <h3>Skills</h3>
    <p>
      As a developer I always want to improve my skillset and learn new things everyday. Over these
      years I have accquired a extended skillset in multiple programming languages, tools, design
      patterns, mindset, customer care, customer support, ... . On the following pages I will try to
      list my main skills with some extended detail and also show off other skills I have accquired.
    </p>

    <h4>Programming Languages</h4>
    <ProgrammingLanguages>
      <ImageLink title="Java" image={java} link="/skills/java" />
      <ImageLink title="JavaScript" image={javascript} link="/skills/javascript" />
    </ProgrammingLanguages>
  </div>
);

export default SkillsPage;
