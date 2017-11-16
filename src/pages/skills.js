import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem, em, lighten } from 'polished';
import ImageLink from '../components/ImageLink';

import german from '../assets/images/languages/german.svg';
import english from '../assets/images/languages/english.svg';
import french from '../assets/images/languages/french.svg';
import spanish from '../assets/images/languages/spanish.svg';

import java from '../assets/images/java/java.svg';
import javascript from '../assets/images/javascript/javascript.svg';
import csharp from '../assets/images/csharp/csharp.png';
import sql from '../assets/images/sql/sql.png';
import php from '../assets/images/php/php.svg';
import vb from '../assets/images/vb/vb.png';
import c from '../assets/images/c/c.svg';
import cpp from '../assets/images/c++/c++.svg';

const Heading = styled.h4`
  margin-bottom: ${rem('22px')};
  padding: 0;
  color: ${lighten(0.1)('#343A40')};
`;

const SubHeading = styled.h6`
  margin: ${rem('20px')} 0 ${rem('20px')} 0;
  padding: 0;
  font-style: italic;
  font-size: ${em('16px')};
  color: ${lighten(0.4)('#343A40')};
`;

const ImageList = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;

  > div {
    margin: ${rem('10px')} ${rem('15px')} ${rem('5px')} 0;
  }
`;

const SkillsPage = ({}) => (
  <div className="container-fluid">
    <h3>Skills</h3>
    <p>
      As a developer I always want to improve my skillset and learn new things everyday. Over these
      years I have accquired a extended skillset in multiple programming languages, tools, design
      patterns, mindset, customer care, customer support, ... . On the following pages I will try to
      list my main skills with some extended detail and also show off other skills I have accquired.
    </p>
    <hr />
    <div className="row mb-2">
      <div className="col-sm-12 my-4 col-md-6">
        <Heading>Language</Heading>

        <SubHeading>Mother tongue</SubHeading>

        <ImageList>
          <ImageLink title="German" image={german} />
        </ImageList>

        <SubHeading>Fluent</SubHeading>

        <ImageList>
          <ImageLink title="English" image={english} />
        </ImageList>

        <SubHeading>Basic</SubHeading>

        <ImageList>
          <ImageLink title="French" image={french} />
          <ImageLink title="Spanish" image={spanish} />
        </ImageList>
      </div>

      <div className="col-sm-12 my-4 col-md-6">
        <Heading>Programming Language</Heading>

        <SubHeading>Primary</SubHeading>

        <ImageList>
          <ImageLink title="Java" image={java} link="/skills/java" />
          <ImageLink title="JavaScript" image={javascript} link="/skills/javascript" />
          <ImageLink title="C#" image={csharp} link="/skills/csharp" />
        </ImageList>

        <SubHeading>Advanced</SubHeading>

        <ImageList>
          <ImageLink title="SQL" image={sql} />
          <ImageLink title="PHP" image={php} />
          <ImageLink title="Visual Basic" image={vb} />
        </ImageList>

        <SubHeading>Basic</SubHeading>

        <ImageList>
          <ImageLink title="C" image={c} />
          <ImageLink title="C++" image={cpp} />
        </ImageList>
      </div>
    </div>

    <div className="row mt-2">
      <div className="col-sm-12 my-4 col-md-6">
        <Heading>Plattform</Heading>
        <ImageList>
          <ImageLink title="Windows" image="http://lorempixel.com/100/100/technics/" />
          <ImageLink title="Linux" image="http://lorempixel.com/100/100/technics/" />
          <ImageLink title="macOS" image="http://lorempixel.com/100/100/technics/" />
          <ImageLink title="Android" image="http://lorempixel.com/100/100/technics/" />
        </ImageList>
      </div>
      <div className="col-sm-12 my-4 col-md-6">
        <Heading>Database</Heading>
        <ImageList>
          <ImageLink title="PosgreSQL" image="http://lorempixel.com/100/100/technics/" />
          <ImageLink title="MySQL" image="http://lorempixel.com/100/100/technics/" />
          <ImageLink title="SQlite" image="http://lorempixel.com/100/100/technics/" />
          <ImageLink title="MongoDb" image="http://lorempixel.com/100/100/technics/" />
          <ImageLink
            title="Microsoft SQL Server 2008/2012"
            image="http://lorempixel.com/100/100/technics/"
          />
        </ImageList>
      </div>
    </div>

    <div className="row mt-2">
      <div className="col-sm-12 my-4 col-md-6">
        <Heading>VCS</Heading>
        <ImageList>
          <ImageLink title="MKS" image="http://lorempixel.com/100/100/technics/" />
          <ImageLink title="SVN" image="http://lorempixel.com/100/100/technics/" />
          <ImageLink title="TFS" image="http://lorempixel.com/100/100/technics/" />
          <ImageLink title="Mercurial" image="http://lorempixel.com/100/100/technics/" />
          <ImageLink title="git" image="http://lorempixel.com/100/100/technics/" />
        </ImageList>
      </div>
      <div className="col-sm-12 my-4 col-md-6">
        <Heading>Issue Tracker</Heading>
        <ImageList>
          <ImageLink title="Redmine" image="http://lorempixel.com/100/100/technics/" />
          <ImageLink title="YouTrack" image="http://lorempixel.com/100/100/technics/" />
          <ImageLink title="JIRA" image="http://lorempixel.com/100/100/technics/" />
          <ImageLink title="Sentry" image="http://lorempixel.com/100/100/technics/" />
          <ImageLink title="Echolon" image="http://lorempixel.com/100/100/technics/" />
        </ImageList>
      </div>
    </div>

    <div className="row mt-2">
      <div className="col-sm-12 my-4 col-md-6">
        <Heading>CI Server</Heading>
        <ImageList>
          <ImageLink title="Jenkins" image="http://lorempixel.com/100/100/technics/" />
          <ImageLink title="TeamCity" image="http://lorempixel.com/100/100/technics/" />
          <ImageLink title="BitBucket" image="http://lorempixel.com/100/100/technics/" />
          <ImageLink
            title="Team Foundation Server"
            image="http://lorempixel.com/100/100/technics/"
          />
          <ImageLink title="GitLab" image="http://lorempixel.com/100/100/technics/" />
        </ImageList>
      </div>
      <div className="col-sm-12 my-4 col-md-6">
        <Heading>Artifact & Code Quality</Heading>
        <ImageList>
          <ImageLink title="Artifactory" image="http://lorempixel.com/100/100/technics/" />
          <ImageLink title="Nexus" image="http://lorempixel.com/100/100/technics/" />
          <ImageLink title="SonarQube" image="http://lorempixel.com/100/100/technics/" />
          <ImageLink title="SeleniumGrid" image="http://lorempixel.com/100/100/technics/" />
        </ImageList>
      </div>
    </div>

    <div className="row mt-2">
      <div className="col-sm-12 my-4 col-md-6">
        <Heading>IDE</Heading>
        <ImageList>
          <ImageLink title="IntelliJ IDEA" image="http://lorempixel.com/100/100/technics/" />
          <ImageLink title="WebStorm" image="http://lorempixel.com/100/100/technics/" />
          <ImageLink title="PHPStorm" image="http://lorempixel.com/100/100/technics/" />
          <ImageLink title="Eclipse" image="http://lorempixel.com/100/100/technics/" />
          <ImageLink title="Netbeans" image="http://lorempixel.com/100/100/technics/" />
          <ImageLink title="Visual Studio" image="http://lorempixel.com/100/100/technics/" />
        </ImageList>
      </div>
      <div className="col-sm-12 my-4 col-md-6">
        <Heading>Editor</Heading>
        <ImageList>
          <ImageLink title="Visual Studio Code" image="http://lorempixel.com/100/100/technics/" />
          <ImageLink title="Atom" image="http://lorempixel.com/100/100/technics/" />
          <ImageLink title="Sublime Text" image="http://lorempixel.com/100/100/technics/" />
          <ImageLink title="Notepad++" image="http://lorempixel.com/100/100/technics/" />
        </ImageList>
      </div>
    </div>
  </div>
);

export default SkillsPage;
