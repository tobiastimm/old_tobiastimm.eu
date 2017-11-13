import React from 'react';
import Link from 'gatsby-link';
import Timeline from '../components/Timeline';
import TimelineEvent from '../components/TimelineEvent';

const imageSrc =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAV4AAAFeCAMAAAD69YcoAAACPVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9qcjBRAAAAvnRSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdJSktMTU5PUFFSVFZXWFlbXF1eX2FiY2RmZ2hpa2xtb3Bxc3R1d3h5e3x+f4CCg4WGiImLjI6PkZKUlZeYmpudnqCio6WmqKqrra+wsrS1t7m6vL7AwcPFx8jKzM7P0dPV19na3N7g4uTm6Onr7e/x8/X3+fv9AwULuQAACUBJREFUGBntwYlDVHUCB/DvmxlgcBRUPPEiMdrIQl1LWtcj07SWtUyyMjWP3PUow0rJUjLvMnU1r1yyFM0TVBKQY75/27ZK+t4wTwdm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';

const EducationPage = () => (
  <Timeline>
    <TimelineEvent
      title=" Apprenticeship as an IT specialist"
      image={imageSrc}
      subTitle="2012-2015"
    >
      Ewert Ahrensburg Electronic
    </TimelineEvent>
    <TimelineEvent
      inverted
      image={imageSrc}
      title=" State-certified business assistant for foreign languages"
      subTitle="2009-2011"
    >
      Berufsfachschule Ahrensburg
    </TimelineEvent>
    <TimelineEvent title="Secondary school certificate" image={imageSrc} subTitle="2006-2009">
      Friedrich-Junge-Realschule
    </TimelineEvent>
  </Timeline>
);

export default EducationPage;
