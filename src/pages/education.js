import React from 'react';
import Link from 'gatsby-link';
import Timeline from '../components/Timeline';
import TimelineEvent from '../components/TimelineEvent';

const EducationPage = () => (
  <div>
    <Timeline>
      <TimelineEvent icon="graduation-cap" title="Berufsfachschule Ahrensburg">
        <p>Fadel View</p>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
          sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
          diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
          gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
        <p>Investor</p>
      </TimelineEvent>
    </Timeline>
  </div>
);

export default EducationPage;
